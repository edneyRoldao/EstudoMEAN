/*
	Edney Roldão - 18/05/2016
	- Sobre AngularJS

	- O angularJS é um framework MVC frontend que tira do desenvolver a responsabilidade
	   de lidar com DOM (Document Object Model) API diretamente. 

	- O angular disponibiliza o objeto angular globalmente (vamos usa-lo sem ver sua declaração)

	- Utilizamos o objeto angular para registrar nossos módulos e diversas outras funções

	- para registrar um módulo: angular.module('nomeModulo', [ arrayComAsDependenciasDoModulo ])

	- O angular registra os módulos client-side enquanto que o node é server-side.

	- Angular expression (AE) são definidas com {{ tudoQueEstiverAquiSeraBuscadoDinamicamente }}
		-> As AE não são exibidas no navegador. AE não resolvidas ficam em branco

	- O escopo de um controller é a ligação entre a view o os dados.
		-> utilizamos o objeto $scope é que faz essas associações

	- O angular possui um sistema de injeção de dependência baseado no nome do parâmetro, logo
	  se utilizarmos um nome diferente, o framework não será capaz de injetar, exp: $scope

	*********************************************************************************************
	- Aqui eu vou só descrever os passos realizados para definir uma sequência padrão no uso do
	  angularJS

	01: adicionado ng-app="agenda" na página de index
	02: criando o arquivo js com o registro do módulo agenda
	03: importando esse aquivo na index
	04: adicionando angular expressions AE {{ }}
	05: adicionando a diretiva ng-controller na tag body
	06: criando o controller registrado no passo acima
	07: adicionando o módulo ngRoute - Temos que instalar

	
*/