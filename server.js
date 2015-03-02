var http = require('http');

var app = require('./config/express')();

require('./config/database')('mongodb://localhost/pecascompativeis');

http.createServer(app)
	.listen(app.get('port'), function() {
		console.log("Servidor escutando na porta " + app.get('port'));
	});