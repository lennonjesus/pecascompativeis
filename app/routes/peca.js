module.exports = function(app) {
	var controller = app.controllers.peca;

	app.get('/pecas', controller.list);
	app.get('/pecas/:id', controller.get);

};