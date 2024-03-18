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
      case '/style.css':
      sendFile( response, 'style.css' )
      break
      case '/elephant.mp4':
      sendFile( response, 'elephant.mp4' )
      break
      case '/stark.JPG':
      sendFile( response, 'stark.JPG' )
      break
      case '/michi.JPG':
      sendFile( response, 'michi.JPG' )
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
