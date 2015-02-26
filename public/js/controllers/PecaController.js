angular.module('pecas-compativeis').controller('PecaController', function($scope, $routeParams) {

	$scope.resultadoTeste = "Peca Controller";

	console.log($routeParams.pecaId);

});