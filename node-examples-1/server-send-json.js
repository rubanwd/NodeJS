var http = require('http');

var myObj = {
  name: 'John',
  job: 'programmer',
  age: 27
};


var server = http.createServer(function(request, response) {
  res.writeHead(200, {'Content-Type': 'application/json'});
  
  res.end(JSON.stringify(myObj));

});


server.listen(3000, '127.0.0.1'); // порт 3000, ip - localhost