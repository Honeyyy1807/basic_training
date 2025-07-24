const http = require('http');
const fs = require('fs');
const url = require('url');

const PORT = 3000;
const FILE_PATH = './data.json';

if (!fs.existsSync(FILE_PATH)) {
  fs.writeFileSync(FILE_PATH, JSON.stringify({}), 'utf-8');
}

const server = http.createServer((req, res) => {
const parsedUrl = url.parse(req.url, true);

  res.setHeader('Content-Type', 'application/json');

  if (req.method === 'GET' && parsedUrl.pathname === '/data') {
  
    fs.readFile(FILE_PATH, 'utf-8', (err, data) => {
      if (err) {
        res.statusCode = 500;
        return res.end(JSON.stringify({ error: 'Failed to read file' }));
      }

      res.statusCode = 200;
      res.end(data);
    });

  } else if (req.method === 'POST' && parsedUrl.pathname === '/data') {
    let body = '';

    req.on('data', chunk => {
      body += chunk;
    });

    req.on('end', () => {
      try {
        const jsonData = JSON.parse(body);

        fs.appendFile(FILE_PATH, JSON.stringify(jsonData, null, 2), 'utf-8', err => {
          if (err) {
            res.statusCode = 500;
            return res.end(JSON.stringify({ error: 'Failed to write file' }));
          }

          res.statusCode = 200;
          res.end(JSON.stringify({ message: 'Data saved successfully' }));
        });

      } catch (e) {
        res.statusCode = 400;
        res.end(JSON.stringify({ error: 'Invalid JSON' }));
      }
    });

  } else {
    res.statusCode = 404;
    res.end(JSON.stringify({ error: 'Not Found' }));
  }
});

server.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
