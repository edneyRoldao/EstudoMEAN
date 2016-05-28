/*
	Edney Roldão - 17/05/2016
	- EXPRESS LOAD
		Utilizado para evitar chamadas à função require dentro de nossos controllers e routes.

    - Para explicar como ele funciona, vou colocar um exemplo com e sem o uso do express-load.

    - SEM EXPRESS LOAD
    	
    	-> Vamos imaginar que estamos dentro de um arquivo de rota e precisamos importar o seu respectivo controller:
    	   var controller = require('../controllers/home');

    	-> Agora estamos no controller e precisamos importar seu respectivo model
    	   var model = require('../models/contato');

    - COM EXPRESS LOAD
		
		Utilizando os exemplos acima, o acesso aos scripts: app/models/contato e app/controllers/home se torna
		disponível através da instancia do express dessa forma:

		-> app.controllers.home
		-> app.models.contato

		Obs: app é a instancia do express (  var app = require('express')  )

	- Instalar via npm a partir da raíz.
		npm install express-load --save

	- Depois disso temos que importar o módulo dentro do nosso arquivo de configuração do express
*/
