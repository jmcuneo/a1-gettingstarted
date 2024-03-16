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
      sendFile( response, 'test.css' )
      break
    case '/test.js':
      sendFile(response,'test.js')
          break
    case '/picture.png':
      sendFile(response, 'picture.png')
          break
    case '/img.png':
      sendFile(response,'img.png')
      break
    case '/img4.png':
      sendFile(response,'img4.png')
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
