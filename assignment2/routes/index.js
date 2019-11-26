var express = require('express')
var app = express()

app.get('/', function(req, res) {
	res.render('index', {title: 'assignment'})
})

module.exports = app;
