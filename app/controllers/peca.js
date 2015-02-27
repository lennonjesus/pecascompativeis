module.exports = function() {

	var controller = {};

	var dummyList = [
		{_id: 1, nome: 'Filtro de Óleo', tags: 'bmw f650gs f800gs'},
		{_id: 2, nome: 'Filtro de Ar', tags: 'bmw f650gs f800gs'},
		{_id: 3, nome: 'Pastilha de Freio Dianteira', tags: 'bmw f650gs g650gs f800gs'},
		{_id: 4, nome: 'Pastilha de Freio Traseira', tags: 'bmw f650gs g650gs f800gs'}
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