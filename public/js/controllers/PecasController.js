angular.module('pecas-compativeis').controller('PecasController', function($scope, $http) {
	
	$scope.filtro = '';

	$http.get('/pecas')
		.success(function(pecas) {
			$scope.pecas = pecas;
		})
		.error(function(statusText) {
			console.log(statusText);
		}); 

});