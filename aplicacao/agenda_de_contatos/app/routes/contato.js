/*
	Edney Roldão - 17/05/2016
	- ROTA para lista de contatos
*/
module.exports = function(app) {
	var controller = app.controllers.contato;
	app.get('/contatos', controller.listaContatos);
	app.get('/contatos/:id', controller.obterContato);
};