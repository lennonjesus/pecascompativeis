module.exports = function(app) {
	var controller = app.controllers.peca;

	app.route('/pecas')
		.get(controller.list)
		.post(controller.save);
	
	app.route('/pecas/:id')
		.get(controller.get)
		.delete(controller.remove);

};