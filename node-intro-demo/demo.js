const http = require('http')
const fs = require('fs')
const url = require('url')

http.createServer((req, res) => {
  const page = url.parse(req.url).pathname;

  if(page === '/') {
    fs.readFile('demofile.html', (err, data) => {
      console.log(url.parse(req.url));
      res.writeHead(200, {'Content-Type': 'text/html'})
      res.write(data)
      res.end()
    })
  } else if(page === '/submit.js') {
    fs.readFile('submit.js', (err, data) => {
      console.log(url.parse(req.url));
      res.writeHead(200, {'Content-Type': 'text/javascript'})
      res.write(data)
      res.end()
    })
  }
}).listen(8123)
