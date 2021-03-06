/*
	Edney Roldão - 18/05/2016
	- CONTROLLER - contatosController
*/
angular.module('agenda_contato').controller('contatosController', function($scope, Contato) {

	// Lista de contatos
	$scope.listaContatos = [];

	// Trata o filtro de pesquisa de contatos
	$scope.filtro = '';

	$scope.mensagem = {texto: ''};

	function buscarContatos() {
		Contato.query(
			function(contatos) {
				$scope.listaContatos = contatos;
				$scope.mensagem = {};
			},
			function(erro) {
				$scope.mensagem = {texto: 'Não foi possivel obter a lista de contatos'};
			}
 		);		
	}

	buscarContatos();

	$scope.remover = function(contato) {
		var promise = Contato.delete({id: contato._id}).$promise;

		promise.catch(function(erro) {
			$scope.mensagem = {texto: 'Não foi possivel obter a lista de contatos'};
			console.log(erro);					
		});	

		buscarContatos();
	};
});