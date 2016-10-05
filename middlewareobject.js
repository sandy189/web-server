module.exports = {
	requireAuthentication: function(req,res,next) {
		console.log('route hit');
		next();
	},
	logger: function(req,res,next) {
		console.log(req.method + ' ' + req.originalUrl + ' ' + new Date().toString());
		next();
	}
}