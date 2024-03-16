const http = require('http'),
      fs   = require('fs'),
      port = 3000

const server = http.createServer( function( request,response ) {
  if(fs.existsSync("." + request.url)) {
    switch( request.url ) {
      case '/':
        sendFile( response, 'index.html' );
        break
      default:
        sendFile(response, "./" + request.url);
    }
  } else {
    response.end( '404 Error: File Not Found' );
  }
});

server.listen( process.env.PORT || port );

const sendFile = function( response, filename ) {
   fs.readFile( filename, function( err, content ) {
     response.end( content, 'utf-8' )
   })
}
