/*
	Edney Roldão - 17/05/2016
	- Arquivo de configuração do express
	- Esse é um módulo do nodeJS
*/

// Importando o módulo do express-load
var load = require('express-load');

// Importando o conversor de verbos HTTP
var bodyParser = require('body-parser');

// Importando os middleware's de cookie, sessão e inicialização
var cookieParser = require('cookie-parser');
var session = require('express-session');
var passport = require('passport');

// API de segurando que trata as informações presentes no header.
var helmet = require('helmet');

// Importando o módulo do express do nodeJS
var express = require('express');

// Importando o módulo de configuração de rotas
//var home = require('../app/routes/home');		- com o express-load não precisamos dessa linha


// Essa função vai retornar uma instancia do express configurada
module.exports = function() {
	
	var app = express();

	// Configuração de ambiente (porta do servidor)
	app.set('port', 3000);


	// middleware (estamos passando a pasta public do projeto e com ./ pois este será executado a partir da raíz)
	app.use(express.static('./public'));
	// Configurando o template engine EJS no express, devem ser em variáveis de ambiente
	app.set('view engine', 'ejs'); // definindo o engine de templates
	app.set('views', './app/views'); // definindo uma pasta onde ficarão a nossas views


	// Middlewares que tratam a conversão de verbos HTTP
	app.use(bodyParser.urlencoded({extended: true}));
	app.use(bodyParser.json());
	app.use(require('method-override')());

	app.use(cookieParser());
	app.use(session({secret: "joao das couves", resave: true, saveUninitialized: true}));
	app.use(passport.initialize());
	app.use(passport.session());

	// Tratamento do header
	// app.use(helmet.xframe());
	app.use(helmet.xssFilter());
	// app.use(helmet.nosniff());
	app.disable('x-powered-by');


	// Passando a instancia do express para nosso arquivo de configuração de rotas
	// home(app);	-	com o uso do express-load essa linha deve ser modificada como abaixo
	load('models', {cwd: 'app'})
		.then('controllers')
		.then('routes')
		.into(app);
	/*
		Obs:
			01: Dinamicamente a função into adiciona na instancia do express propriedades que apontam para esses módulos 
			02: Precisamos carregar as pastas seguindo a ordem: models, controllers e routes
			03: o parâmetro {cwd: 'app'}, é para mudar a pasta padrão, pois a função procura na raíz, só que ela deve procurar em /app 
	*/

	// Se nenhuma rota atender, redirecionamos para página 404
	app.get('*', function(request, response) {
		response.status(404).render('404');
	});

	return app;
};