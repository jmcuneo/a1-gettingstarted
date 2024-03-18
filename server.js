const http = require('http'),
      fs   = require('fs'),
      port = 3000

const server = http.createServer( function( request,response ) {
  const url = "." + request.url

  if(fs.existsSync(url)) {
    switch( request.url ) {
      case '/':
        sendFile(response, 'index.html')
        break
      default:
        sendFile(response, url)
        break
    }
  } else {
  response.end('404 Error: File Not Found')
  }
    // add if url exists, send file, else, create 404 error
})

server.listen( process.env.PORT || port )

const sendFile = function( response, filename ) {
   fs.readFile( filename, function( err, content ) {
     response.end( content, 'utf-8' )
   })
}
