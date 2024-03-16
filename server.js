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
    case '/test.js':
      sendFile( response, 'test.js' )
      break
    case '/styles.css':
      sendFile( response, 'styles.css' )
      break
    case '/explode.mp4':
      sendFile( response, 'explode.mp4' )
      break
    case '/aria.jpg':
      sendFile( response, 'aria.jpg' )
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
