/*
	Edney Roldão - 17/05/2016
	- SOBRE ROTAS NO ANGULAR

		- O angularJS possui um sistema de rotas que visa blindar o desenvolvedor da
		  complexidade pela atualização de áreas da página utilizando Ajax, evitando 
		  que ele manipule a DOM diretamente.

		- precisamos instalar o módulo ngRoute do angular via bower na raiz do projeto:
			bower install angular-route --save

		- Precisamos adiconar o script na página e registrar como dependência no módulo
		  principal do angular da aplicação.

		- Quando trabalhamos com as rotas do angular (ngRoute) a forma de utilização da
		  diretiva ng-controller muda.

		- A diretiva ng-view sinaliza para o sistema de rotas a área da página que receberá
		  views parciais. Views parciais não possuem as tags html, head e body.

*/