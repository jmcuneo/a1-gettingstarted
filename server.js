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
    case '/resource/image.png':
      var img = fs.readFileSync('./resource/image.png');
      res.writeHead(200, {'Content-Type': 'image/png' });
      res.end(img, 'binary');
      break
    case '/resource/theme.jpeg':
      var img = fs.readFileSync('./resource/theme.jpeg');
      res.writeHead(200, {'Content-Type': 'image/jpg' });
      res.end(img, 'binary');
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
