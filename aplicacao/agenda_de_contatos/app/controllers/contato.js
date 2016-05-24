/*
	Edney Roldão - 17/05/2016
	- CONTATO CONTROLLER
*/

module.exports = function(app) {
	
	var Contato = app.models.Contato;

	var sanitize = require('mongo-sanitize');

	var controller = {};

	controller.listarContatos = function(request, response) {
		Contato.find().populate("emergencia").exec().then(function(contatos) {
			response.json(contatos);
		}, function(erro) {
			console.error(erro);
			response.status(500).json(erro);
		});
	};

	controller.obterContato = function(request, response) {
		var _id = request.params.id;
		Contato.findById(_id).exec().then(function(contato) {
			if(!contato) throw new Error("Contato não encontrado");
			response.json(contato);
		}, function(erro) {
			console.log(erro);
			response.status(404).json(erro);
		});
	};

	controller.removerContato = function(request, response) {
		var _id = sanitize(request.params.id);
		Contato.remove({"_id": _id}).exec().then(function() {
			response.status(204).end();
		}, function(erro) {
			return console.error(erro);
		});
	};

	controller.salvarContato = function(request, response) {
		var _id = request.body._id;

		// Estamos garantindo que só as propriedades abaixo serão persistidos
		var dataFromBodyRequest = 
			{
				"nome": request.body.nome,
				"email": request.body.email,
				"emergencia": request.body.emergencia || null 	//para evitar undefined
			};

		if(_id) {

			Contato.findByIdAndUpdate(_id, dataFromBodyRequest).exec().then(function(contato) {
				response.json(contato);
			}, function(erro) {
				console.error(erro);
				response.status(500).json(erro);
			});

		} else {
			Contato.create(dataFromBodyRequest).then(function(contato) {
				response.status(201).json(contato);
			}, function(erro) {
				console.log(erro);
				response.status(500).json(erro);
			});
		}

	};
	
	return controller;
};