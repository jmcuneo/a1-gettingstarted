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
    case '/plane.png':
      sendFile( response, 'plane.png' )
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

/*
let left = 0; //distance between left side of the screen and left of plane image
let flyPlane = function(){
  left = left + 1000;
  document.getElementById('plane').style.left = left + 'px';
  setTimeout(flyPlance, 100);
}
*/

let position = 0;
const plane = document.getElementById('plane');

setInterval(() => {
  position += 5;
  plane.style.left = position + 'px';

  if (position > window.innerWidth) {
    position = -50;
  }
}, 50);

