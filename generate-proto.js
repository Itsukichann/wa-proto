const { execSync } = require('child_process')
const path = require('path')
const fs = require('fs')

const PROTO_DIR = path.resolve(__dirname, 'proto')

function getProtoFiles(dir) {
  const files = fs.readdirSync(dir, { withFileTypes: true })
  return files
    .flatMap((file) => {
      const filePath = path.join(dir, file.name)
      return file.isDirectory() ? getProtoFiles(filePath) : filePath
    })
    .filter((file) => file.endsWith('.proto'))
}

const protoFiles = getProtoFiles(PROTO_DIR)
if (protoFiles.length === 0) {
  console.error('No .proto files found in the proto directory.')
  process.exit(1)
}

let exportsText = ''

protoFiles.forEach((file) => {
  const fileName = path.basename(file)

  try {
    let content = fs.readFileSync(file, 'utf8')

    if (!/syntax\s*=\s*"proto/i.test(content)) {
      content = `syntax = "proto3"\n` + content
    } else {
      content = content.replace(/syntax\s*=\s*"[^"]+"/i, 'syntax = "proto3"')
    }

    content = content.replace(/\brequired\b/g, 'optional')

    fs.writeFileSync(file, content, 'utf8')

    const outputJS = file.replace(/\.proto$/, '.js')

    const pbjsCommand = [
      `npx pbjs`,
      `-t static-module`,
      `-w commonjs`,
      `-o ${outputJS}`,
      `-r default`,
      file,
    ].join(' ')

    console.log(`Generating JS for ${fileName}...`)

    try {
      execSync(pbjsCommand, { stdio: 'pipe' })
    } catch (err) {
      console.error("PBJS FAILED:", file, err.stdout?.toString(), err.stderr?.toString())
      return
    }

    const exportName = fileName.replace(/\.proto$/, '')
    exportsText += `exports.${exportName} = require('./${exportName}/${exportName}').${exportName}\n`

  } catch (err) {
    console.error(`Error generating JS for ${fileName}: ${err.message}`)
  }
})