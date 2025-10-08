import fs from 'fs'
import path from 'path'
import { execSync } from 'child_process'

const PROTO_DIR = path.resolve('./proto')

/**
 * Rekursif: ambil semua file .proto dari folder utama
 */
function getAllProtoFiles(dir) {
  const entries = fs.readdirSync(dir, { withFileTypes: true })
  const files = []
  for (const entry of entries) {
    const full = path.join(dir, entry.name)
    if (entry.isDirectory()) files.push(...getAllProtoFiles(full))
    else if (entry.isFile() && entry.name.endsWith('.proto')) files.push(full)
  }
  return files
}

/**
 * Jalankan pbjs + pbts dan pastikan hasil file tidak kosong
 */
function generate(file) {
  const dir = path.dirname(file)
  const name = path.basename(file, '.proto')
  const jsFile = path.join(dir, `${name}.js`)
  const dtsFile = path.join(dir, `${name}.d.ts`)

  console.log(`\n📦 Generating for ${file} ...`)

  try {
    // Hapus file lama jika ada
    if (fs.existsSync(jsFile)) fs.unlinkSync(jsFile)
    if (fs.existsSync(dtsFile)) fs.unlinkSync(dtsFile)

    // Generate JS (static module, commonjs)
    execSync(`npx pbjs -t static-module -w commonjs -o "${jsFile}" "${file}"`, { stdio: 'inherit' })

    // Generate TypeScript declarations
    execSync(`npx pbts -o "${dtsFile}" "${jsFile}"`, { stdio: 'inherit' })

    // Validasi hasil
    const jsContent = fs.readFileSync(jsFile, 'utf8').trim()
    const tsContent = fs.readFileSync(dtsFile, 'utf8').trim()

    if (!jsContent.includes('require("protobufjs/minimal")') || jsContent.length < 200) {
      throw new Error(`File ${name}.js tidak valid atau kosong`)
    }

    if (!tsContent.includes('declare namespace') || tsContent.length < 50) {
      throw new Error(`File ${name}.d.ts tidak valid atau kosong`)
    }

    console.log(`✅ Sukses generate: ${name}.js & ${name}.d.ts`)
  } catch (err) {
    console.error(`❌ Gagal generate untuk ${file}: ${err.message}`)
  }
}

console.log('🚀 Memulai generate semua .proto...\n')

const files = getAllProtoFiles(PROTO_DIR)
if (files.length === 0) {
  console.error('⚠️ Tidak ada file .proto ditemukan di folder proto/')
  process.exit(1)
}

for (const f of files) generate(f)

console.log('\n🎉 Semua file .proto telah berhasil dikompilasi!\n')