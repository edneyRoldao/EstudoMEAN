/*
	Edney Roldão - 25/05/2016
	SUITE de testes
*/
describe('contatoController', function() {

	var $scope;
	var $httpBackend;

	beforeEach(function() {
		module('agenda_contato');
		inject(function($injector, _$httpBackend_) {
			$scope = $injector.get('$rootScope').$new();
			$httpBackend = _$httpBackend_;
			$httpBackend.when('GET', '/contatos/1').respond({_id: 1});
			$httpBackend.when('GET', '/contatos').respond([{}]);
		});
	});

	it("Deve preencher o contato quando parâmetro for passado", inject(function($controller) {
		$controller('contatoController', {'$routeParams': {contatoId: 1}, '$scope': $scope});
		$httpBackend.flush();
		expect($scope.contato._id).toBeDefined();
	}));

	it("Deve criar um contato vazio quando nenhum parâmetro de rota for passado", inject(function($controller) {
		$controller('contatoController', {"$scope": $scope});
		expect($scope.contato._id).toBeUndefined();
	}));

});
