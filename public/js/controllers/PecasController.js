angular.module('pecas-compativeis').controller('PecasController', function($scope, $routeParams) {
	$scope.resultadoTeste = "Pecas Controller";

	$scope.filtro = '';

	$scope.pecas = [
		{_id: 1, nome: 'Filtro de Óleo', tags: 'bmw f650gs f800gs'},
		{_id: 2, nome: 'Filtro de Ar', tags: 'bmw f650gs f800gs'},
		{_id: 3, nome: 'Pastilha de Freio Dianteira', tags: 'bmw f650gs g650gs f800gs'},
		{_id: 4, nome: 'Pastilha de Freio Traseira', tags: 'bmw f650gs g650gs f800gs'}
	];

});