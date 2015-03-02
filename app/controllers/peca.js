module.exports = function(app) {

	var controller = {};

	var Peca = app.models.peca;

	/**
	* Retorna uma lista de peças
	*/
	controller.list = function(req, res) {
		Peca.find()
			.exec()
			.then(
				function(pecas) {
					res.json(pecas);
				},
				function(erro) {
					console.error(erro);
					res.status(500).json(erro);
				}
			);
	};

	/**
	* Retorna uma peça de acordo com o id fornecido
	*/
	controller.get = function(req, res) {
		var _id = req.params.id;
		
		Peca.findById(_id).exec().then(function(peca) {
			if(!peca) throw new Error("Peça não encontrada.");
			res.json(peca);
		}, 
		function(erro) {
			console.error(erro);
			res.status(404).json(erro);
		});
	};

	/**
	* Deleta uma peça de acordo com o id fornecido
	*/
	controller.remove = function(req, res) {
		var _id = req.params.id;

		Peca.remove({"_id": _id}).exec().then(function() {
			res.end();
		},
		function(erro) {
			return console.error(erro);
		});
	};

	/*
	* Salva os dados de uma peça
	*/
	controller.save = function(req, res) {
		var _id = req.body._id;

		if(_id) {
			Peca.findByIdAndUpdate(_id, req.body).exec().then(function(peca) {
				res.json(peca);
			},
			function(erro) {
				console.error(erro);
				res.status(500).json(erro);
			});
		} else {
			Peca.create(req.body).then(
				function(peca) {
					res.status(201).json(peca);
				},
				function(erro) {
					console.error(erro);
					res.status(500).json(erro);
				}
			);
		}
	};

	/**
	* Cria uma nova peça
	*/
	function create (newPeca) {
		
	}

	/**
	* Altera os dados de peça existente
	*/
	function update (updatedPeca) {
		
	}

	return controller;

};