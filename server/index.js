const http = require('http');
const fs = require('fs');

// Create a http.server
const server = http.createServer((req, res) => {
  const {url, method} = req;
  console.log(url, method);
  if (url === '/') {
    const indexPage = fs.readFileSync('./index.html')
    res.writeHead(200, {
      'Content-Type': 'text/html',
    });
    res.write(indexPage);
    return res.end('<h1>Node.js HTTP Server</h1>');
  } else if (url === '/about') {
    if (method === 'GET') {
      const aboutPage = fs.readFileSync('./about.html')
      res.writeHead(200, {
        'Content-Type': 'text/html',
      });
      res.write(aboutPage);
      return res.end();
    } else if (method === 'POST') {
      req.on('data', (data) =>  {
        console.log(JSON.parse(data));
        const {email, password} = JSON.parse(data);
        if (email === 'hello@coderdiaz.me' && password === '1234567890') {
          res.writeHead(200, {
            'Content-Type': 'application/json',
          });
          return res.end('{ "message": "Authentication successful" }')
        } else {
          res.writeHead(401, {
            'Content-Type': 'application/json',
          });
          return res.end('{ "message": "Authentication failed" }')
        }
      });
    }
  } else {
    return res.end('Not found');
  }
});

// Mount server to 8080 port
server.listen(8080, () => {
  console.log('Listening on port 8080');
});