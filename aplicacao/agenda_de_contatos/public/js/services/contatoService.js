/*
	Edney Roldão - 20/05/2016
	- Primeiro Service - o angular permite criar serviços reaproveitáveis entre controllers
*/
angular.module('agenda_contato').factory('Contato', function($resource) {
	return $resource('/contatos/:id');
});