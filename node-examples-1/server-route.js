var http = require('http');
var fs = require('fs');

var server = http.createServer(function(req, res) {
  if(req.url === '/home' || req.url === '/') {
   res.writeHead(200, {'Content-Type': 'text/html'});
   fs.createReadStream(__dirname + '/index.html').pipe(res);
  } else if(req.url === '/contact') {
   res.writeHead(200, {'Content-Type': 'text/html'});
   fs.createReadStream(__dirname + '/contact.html').pipe(res);
  } else if(req.url === '/api/users') {
   var users = [{name: 'John', age: 27}, {name: 'David', age: 37}, {name: 'Serhii', age: 31}];
   res.writeHead(200, {'Content-Type': 'application/json'});
   res.end(JSON.stringify(users));
  } else {
   res.writeHead(404, {'Content-Type': 'text/html'});
   fs.createReadStream(__dirname + '/404.html').pipe(res);
  }
});


server.listen(3000, '127.0.0.1');
console.log('Прослушивание порта 3000');