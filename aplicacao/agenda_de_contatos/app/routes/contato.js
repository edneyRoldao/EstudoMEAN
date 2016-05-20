/*
	Edney Roldão - 17/05/2016
	- ROTA para lista de contatos
*/
module.exports = function(app) {

	var controller = app.controllers.contato;

	app.route('/contatos')
		.get(controller.listaContatos)
		.post(controller.salvarContato);

	app.route('/contatos/:id')
		.get(controller.obterContato)
		.delete(controller.removerContato);
};