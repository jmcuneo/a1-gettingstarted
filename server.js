const http = require('http'),
      fs   = require('fs'),
      port = 3000

const server = http.createServer( function( request,response ) {
  const url = "." + request.url;

  switch( request.url ) {
    case '/':
      sendFile( response, 'index.html' )
      break
    default:
     sendFile(response, url);
  }

  /*
    switch( request.url ) {
    case '/':
      sendFile( response, 'index.html' )
      break
    default:
     sendFile(response, url);
  }
   */
  /*
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
      sendFile( response, 'test.js' )
      break
    case '/animation.js':
      sendFile( response, 'animation.js' )
      break
    default:
      response.end( '404 Error: File Not Found' )
  }
   */
})

server.listen( process.env.PORT || port )

const sendFile = function( response, filename ) {
   fs.readFile( filename, function( err, content ) {
     response.end( content, 'utf-8' )
   })
}
