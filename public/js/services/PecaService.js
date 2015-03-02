angular.module("pecas-compativeis").factory("Peca", function($resource) {
	return $resource('/pecas/:id');
});