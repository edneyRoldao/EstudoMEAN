/*
	Edney Roldão - 18/05/2016
	- CONTROLLER - contatosController
*/
angular.module('agenda_contato').controller('contatosController', function($scope) {

	// Lista de contatos em memória (temporário)
	$scope.listaContatos = [
		{"_id": 1, "nome": "Contato Angular 01", "email": "contato01@mean.com"},
		{"_id": 2, "nome": "Contato Angular 02", "email": "contato01@mean.com"},
		{"_id": 3, "nome": "Contato Angular 03", "email": "contato01@mean.com"},
		{"_id": 4, "nome": "Contato Angular 04", "email": "contato01@mean.com"}
	];

	$scope.total = 0;
	$scope.incrementa = function() {
		$scope.total++;
	};
});