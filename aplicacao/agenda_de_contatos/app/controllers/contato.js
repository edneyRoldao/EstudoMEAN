/*
	Edney Roldão - 17/05/2016
	- CONTATO CONTROLLER
*/

module.exports = function(app) {
	
	var Contato = app.models.contato;

	var controller = {};

	controller.listarContatos = function(request, response) {
		Contato.find().exec().then(function(contatos) {
			response.json(contatos);
		}, function(erro) {
			console.error(erro);
			response.status(500).json(erro);
		});
	};

	controller.obterContato = function(request, response) {

	};

	controller.removerContato = function(request, response) {

	};

	controller.salvarContato = function(request, response) {

	};
	
	return controller;

};