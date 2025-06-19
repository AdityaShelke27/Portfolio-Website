const express = require('express');
const path = require('path');
const app = express();
const port = 8080;

const buildPath = path.join(__dirname, 'app');
// Serve Brotli-compressed files with correct headers
app.get(/.*\.br$/, (req, res, next) => {
  res.set('Content-Encoding', 'br');
  if (req.url.endsWith('.js.br')) res.set('Content-Type', 'application/javascript');
  if (req.url.endsWith('.wasm.br')) res.set('Content-Type', 'application/wasm');
  if (req.url.endsWith('.data.br')) res.set('Content-Type', 'application/octet-stream');
  next();
});

// Serve static files
app.use(express.static(buildPath));

app.listen(port, () => {
  console.log(`✅ Unity WebGL build running at: http://localhost:${port}`);
});
