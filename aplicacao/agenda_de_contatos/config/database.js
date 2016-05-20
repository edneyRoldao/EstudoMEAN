/*
	Edney Roldão - 20/05/2016
	- Arquivo de conexão com o banco de dados mongoDB
*/
var mongoose = require('mongoose');

mongoose.set('debug', true);

module.exports = function(URL) {

	mongoose.connect(URL);

	mongoose.connection.on('connected', function() {
		console.log('mongoose ! conectado em: ' + URL);
	});	

	mongoose.connection.on('disconnected', function() {
		console.log('mongoose ! desconectado de: ' + URL);
	});	

	mongoose.connection.on('error', function(erro) {
		console.log('mongoose ! Erro na conexão' + erro);
	});

	process.on('SIGINT', function() {
		mongoose.connection.close(function() {
			console.log("mongoose ! desconectado pelo término da aplicação");
			process.exit(0) // zero aqui indica que a finalização ocorreu sem erros
		});
	});	

};