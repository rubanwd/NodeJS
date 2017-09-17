var http = require('http');
var fs = require('fs');

var server = http.createServer(function(request, response) {
  response.writeHead(200, {'Content-Type': 'text/plain'});
  var myReadStream = fs.createReadStream(__dirname + '/readMe.txt', 'utf8');
  myReadStream.pipe(response);
});

server.listen(3000, '127.0.0.1');
console.log('Прослушивание порта 3000');