var mongoose = require('mongoose');

module.exports = function(uri) {
	mongoose.connect(uri);

	mongoose.connection.on('connected', function() {
		console.log('[Mongoose] conectado em: ' + uri);
	});

	mongoose.connection.on('disconnected', function() {
		console.log('[Mongoose] Desconetado de: ' + uri);
	});

	mongoose.connection.on('error', function(erro) {
		console.log('[Mongoose] Erro na conexao: ' + erro);
	});

	process.on('SIGINT', function() {
		mongoose.connection.close(function() {
			console.log('[Mongoose] Desconectado pelo termino da aplicacao ' + erro);
			process.exit(0);
		});
	});

};

