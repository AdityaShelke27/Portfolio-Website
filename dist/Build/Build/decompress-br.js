const fs = require('fs');
const zlib = require('zlib');
const path = require('path');

const files = [
  'WebGL.framework.js.br',
  'WebGL.data.br',
  'WebGL.wasm.br',
];

files.forEach((file) => {
  const inputPath = path.join(__dirname, file);
  const outputPath = inputPath.replace(/\.br$/, '');

  const input = fs.createReadStream(inputPath);
  const output = fs.createWriteStream(outputPath);
  const brotli = zlib.createBrotliDecompress();

  input.pipe(brotli).pipe(output).on('finish', () => {
    console.log(`Decompressed: ${file} -> ${path.basename(outputPath)}`);
  });
});
