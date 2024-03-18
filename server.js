// Modified version of the code used to support stylization

const http = require('http'),
      fs   = require('fs'),
      port = 3000;

const server = http.createServer(function(request, response) {
  if (request.url === '/' || request.url === '/index.html') {
    sendFile(response, 'index.html');
  } else {
    // Attempt to serve static files
    sendFile(response, request.url.substring(1)); // Remove the leading '/'
  }
});

server.listen(process.env.PORT || port);

const sendFile = function(response, filename) {
   fs.readFile(filename, function(err, content) {
     if (err) {
       response.writeHead(404, { 'Content-Type': 'text/plain' });
       response.end('404 Error: File Not Found');
     } else {
       // Determine the content type based on the file extension
       let contentType = 'text/html'; // Default content type
       if (filename.endsWith('.css')) {
         contentType = 'text/css';
       } else if (filename.endsWith('.js')) {
         contentType = 'text/javascript';
       } else if (filename.endsWith('.png')) {
         contentType = 'image/png';
       } else if (filename.endsWith('.jpg') || filename.endsWith('.jpeg')) {
         contentType = 'image/jpeg';
       }
       
       response.writeHead(200, { 'Content-Type': contentType });
       response.end(content, 'utf-8');
     }
   });
};
