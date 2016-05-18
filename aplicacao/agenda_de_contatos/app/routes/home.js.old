/*
	Edney Roldão - 17/05/2016
	- Arquivo de configuração de rotas

	- A função app.get() equivale ao verbo get do protocolo http, isto é, uma função preparada
	  para lidar com requisições do tipo GET.

	- Depois de configurar uma rota, temos que criar o nosso controller

	- será criado um controller de nome home.js
*/

// Importando um controller para tratar as rotas. 
// var controller = require('../controllers/home')(); - com o express-load não precisamos disso

/* Obs: com o uso do express-load, devemos recuperar o controller a partir da instancia do express, ou seja, dentro da function */

module.exports = function(app) {

	var controller = app.controllers.home;

	// 1º arg: configurando rota que atende a URL: [ / ] (no browser: http://localhost:3000/)
	// 2º arg: Passamos o controller que trata a rota chamando sua propriedade que armazena uma function
	app.get('/', controller.index); 

};
