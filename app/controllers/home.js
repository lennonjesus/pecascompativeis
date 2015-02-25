module.exports = function() {

	var controller = {};

	controller.index = function(req, res) {
		res.render('index', {data: new Date()});
	};

	return controller;

};