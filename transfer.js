const fs = require('fs');

var string = fs.readFileSync('temp.txt');
string += " Hello world";
fs.writeFile("output.txt", string, function(err) {

    if(err)  return console.log(err);
    console.log("Successfully");
});




//demo
console.log("Hello world");
console.log(__dirname);

function test() {
  console.log("hello");
}
test();

var counter = require('./array');
conspole.log(counter([1,2,55,4,23,55]));

var http = require('http');
var fact = require('./user');
var server = http.createServer(function(req, res) {
//  console.log("URL " + req.url);
  // res.writeHead(200, {'Content-Type': 'text/plain; charset=utf-8'});
  res.write(fact(7)+ "");
  res.end();
});

server.listen(3000, '127.0.0.1');
console.log(user);
const user = require('./user');
console.log(user);

var express = require('express');
var app = express();

app.get('/hello', function(req, res){
   res.send("Hello World!");
});

app.listen(3000);
