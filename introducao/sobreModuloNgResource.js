/*
	Edney Roldão - 19/05/2016
	- MÓDULO ngRESOURCE - trabalhando em alta nível com o serviço $http do angular

	- É um serviço de mais alto nível do angularJS chamado de $resource, específico para consumir
	  REST Endpoints.

	- O serviço $resource não faz parte do core do angular, portanto, precisamos baixar via bower
	  essa dependencia.
	  
	  -> na raíz do projeto a partir do terminal digite:
	  		bower install angular-resource --save

	  -> depois é só aplicar o script na página principal (index)

	  -> Temos que adicionar essa dependencia junto ao módulo principal da aplicação do angular

	- O serviço $resource nos devolve um objeto que permite reaizar uma série de operações seguindo
	  o padrão REST para acesso a recursos.

*/
