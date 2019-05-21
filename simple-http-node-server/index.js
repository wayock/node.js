
const fs = require('fs');
    fs.writeFile('hello-world.txt', 'Hello to this great world', function (err) {
    if (err)
      return console.log(err);
    console.log('success')
    });

const http = require('http');

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;

  res.setHeader('Content-Type', 'text/plain');

  res.end('Hello World\n');
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
