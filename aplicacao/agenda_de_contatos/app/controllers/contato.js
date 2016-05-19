/*
	Edney Roldão - 17/05/2016
	- CONTATO CONTROLLER
*/

// Criando uma lista de contatos em memória. Futuramente vamos usar o mongDB para isso
var contatos = [
	{_id: 1, nome: 'contato exemplo 01', email: 'cont01@mean.com'},
	{_id: 2, nome: 'contato exemplo 02', email: 'cont02@mean.com'},
	{_id: 3, nome: 'contato exemplo 03', email: 'cont03@mean.com'},
	{_id: 4, nome: 'contato exemplo 04', email: 'cont04@mean.com'}
];

module.exports = function() {
	var controller = {};

	controller.listaContatos = function(request, response) {
		// Nesse caso não vamos renderizar uma página HTML, vamos disponibilizar um json 
		response.json(contatos);
	};

	controller.obterContato = function(request, response) {
		var idContato = request.params.id;

		var contato = contatos.filter(function(elemento) {
			return elemento._id == idContato;
		})[0];

		// Aplicando um ternário
		contato ? response.json(contato) : response.status(404).send('Contato não encontrado');

	};

	controller.removerContato = function(request, response) {
		var idContato = request.params.id;
		contatos = contatos.filter(function(elemento) {
			return elemento._id != idContato;
		});
	};
	
	return controller;
};