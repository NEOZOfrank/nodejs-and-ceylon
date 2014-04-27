
var http = require('http');
var myCeylon = require('./nodeceylon-1.0.0.js');


http.createServer(function (req, res) {

  res.end("Hallo, " + myCeylon.run());

  //res.writeHead(200, {'Content-Type': 'text/plain'});
  //res.end('Hello World\n');

}).listen(1337, '127.0.0.1');

console.log('Server running at http://127.0.0.1:1337/');


