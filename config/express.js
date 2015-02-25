var express = require('express');

// var home = require('../app/routes/home'); // removido, substituido por express-load
var load = require('express-load');

var bodyParser = require('body-parser');

module.exports = function() {
	var app = express();


	app.set('port', 3000);
	app.use(express.static('./public'));
	app.set('view engine', 'ejs');
	app.set('views', './app/views');

	app.use(bodyParser.urlencoded({extended: true}));
	app.use(bodyParser.json());
	app.use(require('method-override')());

	//home(app); // removido, substituido por express-load

	load('models', {cwd: 'app'})
		.then('controllers')
		.then('routes')
		.into(app);

	return app;
	
};

