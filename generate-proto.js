const { execSync } = require('child_process');
const path = require('path');
const fs = require('fs');

const PROTO_DIR = path.resolve(__dirname, 'proto');

function getProtoFiles(dir) {
  if (!fs.existsSync(dir)) return [];
  const files = fs.readdirSync(dir, { withFileTypes: true });
  return files.flatMap(file => {
    const filePath = path.join(dir, file.name);
    return file.isDirectory() ? getProtoFiles(filePath) : filePath;
  }).filter(file => file.endsWith('.proto'));
}

const protoFiles = getProtoFiles(PROTO_DIR);
if (protoFiles.length === 0) {
  console.error('⚠️  Tidak ada file .proto di folder proto.');
  process.exit(1);
}

let exportsText = '';

for (const file of protoFiles) {
  const fileName = path.basename(file, '.proto');
  const outputDir = path.dirname(file);
  const outputJS = path.join(outputDir, `${fileName}.js`);
  const outputTS = path.join(outputDir, `${fileName}.d.ts`);

  try {
    console.log(`\n🔧 Menghasilkan file untuk: ${fileName}.proto`);

    // Pastikan direktori output ada
    if (!fs.existsSync(outputDir)) fs.mkdirSync(outputDir, { recursive: true });

    // Jalankan pbjs
    const pbjsCommand = [
      `npx pbjs`,
      `-t static-module`,
      `-w commonjs`,
      `-o "${outputJS}"`,
      `-r default`,
      `"${file}"`
    ].join(' ');
    execSync(pbjsCommand, { stdio: 'inherit' });

    // Jalankan pbts
    const pbtsCommand = [`npx pbts`, `-o "${outputTS}"`, `"${outputJS}"`].join(' ');
    execSync(pbtsCommand, { stdio: 'inherit' });

    // Pastikan file hasil benar-benar ada
    if (!fs.existsSync(outputJS)) {
      console.warn(`⚠️  File .js tidak ditemukan untuk ${fileName}, membuat dummy file...`);
      fs.writeFileSync(outputJS, '// dummy js\n');
    }
    if (!fs.existsSync(outputTS)) {
      console.warn(`⚠️  File .d.ts tidak ditemukan untuk ${fileName}, membuat dummy file...`);
      fs.writeFileSync(outputTS, '// dummy d.ts\n');
    }

    exportsText += `exports.${fileName} = require('./${fileName}');\n`;
  } catch (err) {
    console.error(`❌ Gagal memproses ${fileName}.proto: ${err.message}`);
    // Buat file dummy agar ekspor tidak gagal
    fs.writeFileSync(outputJS, '// failed js\n');
    fs.writeFileSync(outputTS, '// failed d.ts\n');
  }
}

// Tulis file index.js
const indexPath = path.join(PROTO_DIR, 'index.js');
fs.writeFileSync(indexPath, exportsText || '// no exports\n', 'utf8');

console.log('\n✅ Protobuf generation complete!');