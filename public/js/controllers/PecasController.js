angular.module('pecas-compativeis').controller('PecasController', function($scope, $resource) {
	
	$scope.filtro = '';

	$scope.pecas = [];

	var Peca = $resource('/pecas/:id');

	Peca.query(
		function(pecas) {
			$scope.pecas = pecas;
		},
		function(erro) {
			console.log(erro);
		}
	);

});