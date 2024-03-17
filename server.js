const { send } = require('process')

const http = require('http'),
      fs   = require('fs'),
      port = 3000

const server = http.createServer( function( request,response ) {
  switch( request.url ) {
    case '/':
      sendFile( response, 'index.html' )
      break
    case '/index.html':
      sendFile( response, 'index.html' )
      break
    case '/test.css':
      sendFile(response, 'test.css')
      break
    case '/animation.js':
      sendFile(response, 'animation.js')
      break
    case '/cat.png':
      sendFile(response, 'cat.png')
      break
    case '/cat-1.png':
      sendFile(response, 'cat-1.png')
      break
    case '/cat-2.png':
      sendFile(response, 'cat-2.png')
      break
    default:
      response.end( '404 Error: File Not Found' )
  }
})

server.listen( process.env.PORT || port )

const sendFile = function( response, filename ) {
   fs.readFile( filename, function( err, content ) {
     response.end( content, 'utf-8' )
   })
}
