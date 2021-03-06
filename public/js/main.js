/*
	Edney Roldão - 17/05/2016
	- Registro de módulo principal da alicação do angularJS
*/
angular.module('agenda_contato', ['ngRoute', 'ngResource', 'meusComponentes']).config(function($routeProvider, $httpProvider) {

	// Adicionando interceptor
	$httpProvider.interceptors.push('meuInterceptor');

	// Definindo a rota do angular que trata a listagem de contatos
	$routeProvider.when('/contatos', {templateUrl: 'partials/contatos.html', 
									   controller: 'contatosController'});

	// Definindo a rota de angular que trata a pesquisa de um contato
	$routeProvider.when('/contato/:contatoId', {templateUrl: 'partials/contato.html', 
									       controller: 'contatoController'});

	$routeProvider.when('/contato', {templateUrl: 'partials/contato.html', 
									       controller: 'contatoController'});

	$routeProvider.when('/auth', {
		templateUrl: 'partials/auth.html'
	});

	// Definando uma rota padrão caso a rota digitada não existir
	$routeProvider.otherwise({redirectTo: '/contatos'});

});