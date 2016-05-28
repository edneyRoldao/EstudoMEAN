/*
	Edney Roldão - 22/05/2016
	- INTERCEPTOR SERVICE

	- Descrição:
		Vamos processar o serviço $location para executar a rota auth (redirecionar)
		quando a response dos serviços $resource ou $http devolverem uma resposta de 
		erro do servidor 401 (não autorizado)
*/
angular.module('agenda_contato').factory('meuInterceptor', function($location, $q) {
	var interceptor = {
		responseError: function(resposta) {
			if(resposta.status == 401) {
				$location.path('/auth');
			}
			return $q.reject(resposta);
		}
	};

	return interceptor;
});