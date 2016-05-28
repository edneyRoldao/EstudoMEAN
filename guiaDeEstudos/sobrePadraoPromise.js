/*
	Edney Roldão - 19/05/2016
	- Sobre o padrão Promise e o serviço $http do angularJS

	SERVIÇO HTTP DO ANGULAR:
		- O serviço http recebe como parâmetro um objeto com as configurações da requisição que é:
			objeto: {method: '', url: '', data: ''}

		- O serviço $http no lugar de receber uma função de callback, ele retorna um valor que chamamos de 'promise'

	PROMISE:
		- Uma promise é um objeto que fornecerá o resultado futuro de uma ação.
		- Uma promise possui 3 estados: (fulfilled: bem sucedida, rejected e failed)
		- Uma primise possui uma função chamada then que recebe como parâmetro duas funções de callback,
		  o primeira é executado quando quando o status da promise é fulfilled e a segundo quando rejected ou failed

	EXEMPLO DE USO DO SERVIÇO HTTP E PROMISES

		var promessa = $http.get('/url');

		promessa.success(function(dado) {
			var resultadoDaRequisicao = dado;
		});

		promessa.error(function(erro) {
			console.log('erro na requisição' + erro);
		});	
*/
