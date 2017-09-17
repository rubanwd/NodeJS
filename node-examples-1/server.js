var http = require('http');

var server = http.createServer(function(request, response) {
  response.writeHead(200, {'Content-Type': 'text/plain'});
  response.end('Hello World');
});


server.listen(3000, '127.0.0.1'); // порт 3000, ip - localhost