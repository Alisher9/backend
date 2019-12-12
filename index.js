// console.log("Hello world");
// console.log(__dirname);

// function test() {
//   console.log("hello");
// }
// test();

// var counter = require('./array');
// conspole.log(counter([1,2,55,4,23,55]));

// var http = require('http');
// var fact = require('./user');
// var server = http.createServer(function(req, res) {
// //  console.log("URL " + req.url);
//   // res.writeHead(200, {'Content-Type': 'text/plain; charset=utf-8'});
//   res.write(fact(7)+ "");
//   res.end();
// });
//
// server.listen(3000, '127.0.0.1');
// console.log(user);
//const user = require('./user');
//console.log(user);

// var express = require('express');
// var app = express();
//
// app.get('/hello', function(req, res){
//    res.send("Hello World!");
// });
//
// app.listen(3000);

const express = require('express');
const app = express();
const path = require('path');

app.set('view engine', 'ejs');
app.set('view', path.join(__dirname, 'views'));

app.get('/student/:id/:name?', (req, res) => {
  res.render('index.ejs', {
    dataL req.params.id,
    name: req.params.name || 0

  })
})

app.listen(3000, function() {
  console.log('listening on 3000')
  console.log('index.js')
})
