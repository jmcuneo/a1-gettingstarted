const http = require('http'),
  fs = require('fs'),
  port = 3000

const server = http.createServer(function (request, response) {
  switch (request.url) {
    case '/':
      sendFile(response, 'index.html')
      break
    case '/index.html':
      sendFile(response, 'index.html')
      break
    case '/script.js':
      sendFile(response, 'script.js')
      break
    case '/style.css':
      sendFile(response, 'style.css')
      break
    case '/imgs/atlas.jpg':
      sendFile(response, 'imgs/atlas.jpg')
      break
    case '/imgs/northrop.jpg':
      sendFile(response, 'imgs/northrop.jpg')
      break
    default:
      response.end('404 Error: File Not Found')
  }
})

server.listen(process.env.PORT || port)

const sendFile = function (response, filename) {
  fs.readFile(filename, function (err, content) {
    response.end(content, 'utf-8')
  })
}
