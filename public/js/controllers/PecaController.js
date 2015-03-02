angular.module('pecas-compativeis').controller('PecaController', function($scope, $routeParams, $resource) {

	var Peca = $resource('/pecas/:id');

	Peca.get({id: $routeParams.pecaId}, function(peca) {
		$scope.peca = peca;
	},
	function(erro) {
		$scope.mensagem = {
			texto: 'Não foi possível obter a peça.'
		}
		console.log(erro);
	});



});