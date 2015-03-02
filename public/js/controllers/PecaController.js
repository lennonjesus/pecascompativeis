angular.module('pecas-compativeis').controller('PecaController', function($scope, $routeParams, $resource) {

	var Peca = $resource('/pecas/:id');

	if ($routeParams.pecaId) {

		Peca.get({id: $routeParams.pecaId}, function(peca) {
			$scope.peca = peca;
		},
		function(erro) {
			$scope.mensagem = {
				texto: 'Não foi possível obter a peça.'
			}
			console.log(erro);
		});
	} else {
		$scope.peca = new Peca();
	}

	$scope.salvar = function() {
		$scope.peca.$save()
			.then(function() {
				$scope.mensagem = {
					texto: "Peça salva com sucesso."
				};
			})
			.catch(function(erro) {
			$scope.mensagem = {
				texto: "Não foi possível salvar a peça."
			};
			console.log(erro);
		});
	};


});