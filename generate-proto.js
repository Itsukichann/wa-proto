const { execSync } = require('child_process');
const path = require('path');
const fs = require('fs');

const PROTO_DIR = path.resolve(__dirname, 'proto');

// Recursively collect all `.proto` files
function getProtoFiles(dir) {
  const files = fs.readdirSync(dir, { withFileTypes: true });

  return files
    .flatMap((file) => {
      const filePath = path.join(dir, file.name);
      return file.isDirectory() ? getProtoFiles(filePath) : filePath;
    })
    .filter((file) => file.endsWith('.proto'));
}

const protoFiles = getProtoFiles(PROTO_DIR);
if (protoFiles.length === 0) {
  console.error('No .proto files found in the proto directory.');
  process.exit(1);
}

console.log(`Found ${protoFiles.length} proto files.`);

protoFiles.forEach((file) => {
  const fileName = path.basename(file);

  try {
    let content = fs.readFileSync(file, 'utf8');

    // --------------------------------------------------------
    // 1. Force proto3 syntax at the top
    // --------------------------------------------------------
    if (/syntax\s*=/.test(content)) {
      content = content.replace(/syntax\s*=\s*"[^"]+"/i, 'syntax = "proto3";');
    } else {
      content = `syntax = "proto3";\n${content}`;
    }

    // --------------------------------------------------------
    // 2. Replace every form of "required" (invalid in proto3)
    // --------------------------------------------------------
    const requiredPatterns = [
      /\brequired\s+(?=[a-zA-Z])/gi,
      /\brequired\s*\n/gi,
      /\brequired\t+/gi
    ];

    requiredPatterns.forEach((regex) => {
      content = content.replace(regex, 'optional ');
    });

    // Fallback cleanup
    if (content.includes('required')) {
      console.warn(`[WARN] "required" still detected after cleaning: ${file}`);
      content = content.replace(/\brequired\b/gi, 'optional');
    }

    fs.writeFileSync(file, content, 'utf8');

    // --------------------------------------------------------
    // 3. Verify cleanup
    // --------------------------------------------------------
    const verify = fs.readFileSync(file, 'utf8');
    if (verify.includes('required')) {
      console.error(`[ERROR] "required" still present after rewrite: ${file}`);
    }

    // --------------------------------------------------------
    // 4. Generate JS output via pbjs
    // --------------------------------------------------------
    console.log(`Generating JS for ${fileName}...`);

    const outputJS = file.replace(/\.proto$/, '.js');

    const pbjsCommand = [
      `npx pbjs`,
      `-t static-module`,
      `-w commonjs`,
      `-o "${outputJS}"`,
      `"${file}"`
    ].join(' ');

    try {
      execSync(pbjsCommand, { stdio: 'pipe' });
    } catch (err) {
      console.error("PBJS FAILED:", file);
      console.error("STDOUT:", err.stdout?.toString());
      console.error("STDERR:", err.stderr?.toString());
      return;
    }

  } catch (err) {
    console.error(`Error generating JS for ${fileName}: ${err.message}`);
  }
});

console.log("DONE.");