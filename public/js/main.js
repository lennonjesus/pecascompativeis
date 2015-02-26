angular.module('pecas-compativeis', ['ngRoute'])
	.config(function($routeProvider) {

		$routeProvider.when('/pecas', {
			templateUrl: 'partials/pecas.html',
			controller: 'PecasController'
		});

		$routeProvider.when('/peca/:pecaId', {
			templateUrl: 'partials/peca.html',
			controller: 'PecaController'
		});

		$routeProvider.otherwise({redirectTo: '/pecas'});

	});