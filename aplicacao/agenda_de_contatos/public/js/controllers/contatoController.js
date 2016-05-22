/*
	Edney Roldão - 18/05/2016
	- CONTROLLER - contatoController
*/
angular.module('agenda_contato').controller('contatoController', function($scope, $routeParams, Contato) {

	if($routeParams.contatoId) {
		Contato.get({id: $routeParams.contatoId}, function(contato) {
			$scope.contato = contato;
		}, function(erro) {
			$scope.mensagem = {texto: 'não foi possível obter o contato.'};
			console.log(erro);
		});		
	} else {
		$scope.contato = new Contato();
	}

	$scope.salvar = function() {
		$scope.contato.$save().then(function() {
			$scope.mensagem = {sucesso: 'Contato salvo com sucesso !'};
			$scope.contato = new Contato();						
		}).catch(function(erro) {
			$scope.mensagem = {texto: 'não foi possível salvar o contato.'};			
		});
	};

	Contato.query(function(contatos) {
		$scope.contatos = contatos;
	});

});