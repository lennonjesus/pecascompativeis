var http = require('http');

var app = require('./config/express')();

http.createServer(app)
	.listen(app.get('port'), function() {
		console.log("Servidor escutando na porta " + app.get('port'));
	});