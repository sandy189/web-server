var express=require('express');
var app=express();

global.port=3000;

var middleware={
	requireAuthentication: function(req,res,next) {
		console.log('route hit');
		next();
	},
	logger: function(req,res,next) {
		console.log(req.method + ' ' + req.originalUrl + ' ' + new Date().toString());
		next();
	}
}

app.use(middleware.logger);

app.get('/about', middleware.requireAuthentication, function(req,res) {
	res.send('About us!');
});

app.use(express.static(__dirname + '/public'));

app.listen(global.port, function() {
	console.log('server is listening to : ' + global.port);
});