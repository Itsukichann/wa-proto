/**
 * Protobuf Auto Generator
 * Versi: Stabil (Oktober 2025)
 * Ditulis ulang oleh Itsuki untuk suami tercinta 💙
 */

const { execSync } = require('child_process');
const path = require('path');
const fs = require('fs');

const PROTO_DIR = path.resolve(__dirname, 'proto');

// 🧩 Pastikan protobufjs tersedia
function ensureProtobufInstalled() {
  try {
    execSync('npx pbjs --version', { stdio: 'pipe' });
  } catch {
    console.warn('⚠️  "protobufjs" belum terpasang. Menginstal otomatis...');
    try {
      execSync('npm install protobufjs --save-dev', { stdio: 'inherit' });
      console.log('✅ protobufjs berhasil diinstal.');
    } catch (err) {
      console.error('❌ Gagal menginstal protobufjs:', err.message);
      process.exit(1);
    }
  }
}

// 📦 Ambil semua file .proto secara rekursif
function getProtoFiles(dir) {
  if (!fs.existsSync(dir)) return [];
  return fs.readdirSync(dir, { withFileTypes: true })
    .flatMap((f) => {
      const filePath = path.join(dir, f.name);
      return f.isDirectory() ? getProtoFiles(filePath) : filePath;
    })
    .filter((f) => f.endsWith('.proto'));
}

// 🚀 Jalankan proses utama
function generateProtos() {
  ensureProtobufInstalled();

  const protoFiles = getProtoFiles(PROTO_DIR);
  if (protoFiles.length === 0) {
    console.error('⚠️  Tidak ada file .proto ditemukan di folder "proto".');
    process.exit(1);
  }

  let exportsText = '';

  for (const file of protoFiles) {
    const fileName = path.basename(file, '.proto');
    const outputDir = path.dirname(file);
    const outputJS = path.join(outputDir, `${fileName}.js`);
    const outputTS = path.join(outputDir, `${fileName}.d.ts`);

    console.log(`\n🔧 Memproses: ${fileName}.proto`);

    try {
      // Pastikan folder output ada
      if (!fs.existsSync(outputDir)) fs.mkdirSync(outputDir, { recursive: true });

      // 🧱 Generate .js
      const pbjsCmd = `npx pbjs -t static-module -w commonjs -o "${outputJS}" "${file}"`;
      execSync(pbjsCmd, { stdio: 'inherit' });

      // 🧾 Generate .d.ts
      const pbtsCmd = `npx pbts -o "${outputTS}" "${outputJS}"`;
      execSync(pbtsCmd, { stdio: 'inherit' });

      // Verifikasi hasil
      if (!fs.existsSync(outputJS) || !fs.existsSync(outputTS)) {
        throw new Error('File hasil tidak ditemukan setelah kompilasi.');
      }

      // Tambahkan ekspor
      exportsText += `exports.${fileName} = require('./${fileName}');\n`;

    } catch (err) {
      console.error(`❌ Gagal kompilasi ${fileName}.proto`);
      console.error(`   > ${err.message}`);
      continue; // lanjut file berikutnya
    }
  }

  // Tulis file index.js
  const indexPath = path.join(PROTO_DIR, 'index.js');
  if (exportsText.trim()) {
    fs.writeFileSync(indexPath, exportsText, 'utf8');
    console.log('\n✅ Semua .proto berhasil dikompilasi!');
  } else {
    fs.writeFileSync(indexPath, '// No valid exports\n', 'utf8');
    console.warn('\n⚠️ Tidak ada file yang berhasil dikompilasi.');
  }
}

// 🏁 Eksekusi utama
generateProtos();