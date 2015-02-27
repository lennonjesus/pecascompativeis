angular.module('pecas-compativeis').controller('PecasController', function($scope, $resource) {
	
	$scope.filtro = '';

	$scope.pecas = [];

	$scope.mensagem = {texto: ''};

	var Peca = $resource('/pecas/:id');

	function list() {
		Peca.query(
			function(pecas) {
				$scope.pecas = pecas;
			},
			function(erro) {
				console.log(erro);
				$scope.mensagem = {
					texto: 'Não foi possível obter a lista de peças.'
				};
			}
		);
	}


	$scope.remove = function(peca) {
		Peca.delete({id: peca._id}).$promise
			.then(list)
			.catch(function(erro) {
				console.log(erro);
				$scope.mensagem = {
					texto: 'Não foi possível remover a peça.'
				};
			});
	};

	list();

});