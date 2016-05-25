/*
	Edney Roldão - 25/05/2016
	SUITE de testes
*/
describe('contatoController', function() {

	var $scope;

	beforeEach(function() {
		module('agenda_contato');
		inject(function($injector) {
			$scope = $injector.get('$rootScope').$new();
		});
	});

	it("Deve criar um contato vazio quando nenhum parâmetro de rota for passado", inject(function($controller) {
		$controller('contatoController', {"$scope": $scope});
		expect($scope.contato._id).toBeUndefined();
	}));

});
