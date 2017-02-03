/**
*  This is the simplest app you can develop in NodeJS
*  written by <iamhabbeboy> @habbeboy on twitter, facebook.com/habbeboy
*  github.com/iamhabbeboy
*  please let me know if you didn't understand it
**/
var http;
http = require('http');

http.createServer(function(req,res) {
  res.writeHead(200, {'content-type': 'text/html'});
  res.end('Hello, Node Starter ');
}).listen(3000);
console.log("Listening on Port :3000");
