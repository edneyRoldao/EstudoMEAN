/*
	Edney Roldão - 06/06/2016
*/
angular.module('meusComponentes', [])

	.directive('meuPainel', function() {
	
		var directive = {};

		directive.restrict = "EA";

		directive.scope = {
			titulo: '@'
		};

		directive.transclude = true;

		directive.templateUrl = 'js/directives/myComponents/meu-painel.html';

		return directive;

	}).directive('meuBotaoAviso', function() {

		var directive = {};

		directive.restrict = 'E';

		directive.scope = {
			nome: '@',
			acao: '&'
		};

		directive.template = '<button class="btn btn-warning" ng-click="acao()">{{nome}}</button>';

		return directive;

	}).directive('meuFocus', function() {

		var directive = {};

		directive.restrict = 'A';

		directive.scope = {
			evento: '@'
		};

		directive.link = function(scope, element) {
			scope.$on(scope.evento, function() {
				element[0].focus();
			});
		};

		return directive;
	});

