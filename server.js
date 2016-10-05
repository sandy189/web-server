var express=require('express');
var app=express();

global.port=3000;

var middleware= require('./middlewareobject.js');

app.use(middleware.logger);

app.get('/about', middleware.requireAuthentication, function(req,res) {
	res.send('About us!');
});

app.use(express.static(__dirname + '/public'));

app.listen(global.port, function() {
	console.log('server is listening to : ' + global.port);
});