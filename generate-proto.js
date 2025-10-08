const { execSync } = require('child_process');
const path = require('path');
const fs = require('fs');

const PROTO_DIR = path.resolve(__dirname, 'proto');

// Pastikan protobufjs tersedia
try {
  execSync('npx pbjs --version', { stdio: 'pipe' });
} catch {
  console.error('❌ "protobufjs" belum terpasang. Jalankan: npm install protobufjs --save-dev');
  process.exit(1);
}

function getProtoFiles(dir) {
  if (!fs.existsSync(dir)) return [];
  return fs.readdirSync(dir, { withFileTypes: true })
    .flatMap(f => {
      const filePath = path.join(dir, f.name);
      return f.isDirectory() ? getProtoFiles(filePath) : filePath;
    })
    .filter(f => f.endsWith('.proto'));
}

const protoFiles = getProtoFiles(PROTO_DIR);
if (protoFiles.length === 0) {
  console.error('⚠️  Tidak ada file .proto ditemukan.');
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
    // Jalankan pbjs
    const pbjsCmd = `npx pbjs -t static-module -w commonjs -o "${outputJS}" "${file}"`;
    execSync(pbjsCmd, { stdio: 'inherit' });

    // Jalankan pbts
    const pbtsCmd = `npx pbts -o "${outputTS}" "${outputJS}"`;
    execSync(pbtsCmd, { stdio: 'inherit' });

    if (!fs.existsSync(outputJS) || !fs.existsSync(outputTS)) {
      throw new Error('File hasil tidak ditemukan setelah kompilasi.');
    }

    exportsText += `exports.${fileName} = require('./${fileName}');\n`;
  } catch (err) {
    console.error(`❌ Gagal kompilasi ${fileName}.proto`);
    console.error(`   > ${err.message}`);
    // Hapus dummy creation agar tidak commit file rusak
    continue;
  }
}

if (exportsText.trim()) {
  const indexPath = path.join(PROTO_DIR, 'index.js');
  fs.writeFileSync(indexPath, exportsText, 'utf8');
  console.log('\n✅ Semua .proto berhasil dikompilasi!');
} else {
  console.warn('\n⚠️ Tidak ada file yang berhasil dikompilasi.');
}