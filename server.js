// server.js
const http = require('http');
const fs   = require('fs');
const path = require('path');

const PORT = process.env.PORT || 3000;

http.createServer((req, res) => {
  let filePath = '.' + (req.url === '/' ? '/index.html' : req.url);
  const ext = path.extname(filePath) || '.html';
  const contentType = {
    '.html': 'text/html',
    '.js':   'text/javascript',
    '.css':  'text/css',
    '.json': 'application/json',
    '.png':  'image/png',
    '.jpg':  'image/jpeg'
  }[ext] || 'text/plain';

  fs.readFile(filePath, (err, content) => {
    if (err) {
      res.writeHead(404);
      return res.end('404: Not Found');
    }
    res.writeHead(200, { 'Content-Type': contentType });
    res.end(content);
  });
})
.listen(PORT, '0.0.0.0', () => console.log(`Serving on port ${PORT}`));
