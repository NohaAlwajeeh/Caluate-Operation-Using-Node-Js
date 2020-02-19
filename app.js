//var Addition=require('./Addition.js'); 
//var Min=require('./Min.js'); 
//var http = require('http');
//http.createServer(function (req, res) 
//{fs.readFile('index.html', function(err, data) {
//    res.writeHead(200, {'Content-Type': 'text/html'}); 
//      res.write(data);
// res.end("resullt"+Addition.AddNumber(5,2));
//});
//}).listen(8080);
var Addition=require('./Addition.js'); 
var Min=require('./Min.js'); 
var http = require('http');
var fs = require('fs');
http.createServer(function (req, res) {
  fs.readFile('index.html', function(err, data) {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write(data);
    res.end("result"+Addition.AddNumber(6,2));
  });
}).listen(8080);