module.exports = function() {

	var controller = {};

	var dummyList = [
		{_id: 1, nome: 'Filtro de Óleo'},
		{_id: 2, nome: 'Filtro de Ar'},
		{_id: 3, nome: 'Pastilha de Freio Dianteira'},
		{_id: 4, nome: 'Pastilha de Freio Traseira'}
	];

	/**
	* Retorna uma lista de peças
	*/
	controller.list = function(req, res) {
		res.json(dummyList);
	};

	/**
	* Retorna uma peça de acordo com o id fornecido
	*/
	controller.get = function(req, res) {
		var id = req.params.id;

		var peca = dummyList.filter(function(peca) {
			return peca._id == id;
		})[0];

		peca ? res.json(peca) : res.status(404).send('Peça não encontrada.');

	};

	return controller;


};