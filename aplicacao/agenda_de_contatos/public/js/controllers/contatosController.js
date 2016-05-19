/*
	Edney Roldão - 18/05/2016
	- CONTROLLER - contatosController
*/
angular.module('agenda_contato').controller('contatosController', function($scope, $resource) {

	// Lista de contatos
	$scope.listaContatos = [];

	// Trata o filtro de pesquisa de contatos
	$scope.filtro = '';

	// Usamos essa variável em maiúsculo para diferenciar o contato do nosso model
	var Contato = $resource('/contatos/:id');

	function buscarContatos() {
		Contato.query(
			function(contatos) {
				$scope.listaContatos = contatos;
			},
			function(erro) {
				console.log('Não foi possivel obter a lista de contatos');
				console.log(erro);		
			}
 		);		
	}

	buscarContatos();

	$scope.remover = function(contato) {
		var promise = Contato.delete({id: contato._id}).$promise;
		promise.then(buscarContatos).catch(function(erro) {
				console.log('Não foi possivel obter a lista de contatos');
				console.log(erro);					
		});	
		buscarContatos();
	};

});