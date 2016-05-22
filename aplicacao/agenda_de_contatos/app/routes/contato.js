/*
	Edney Roldão - 17/05/2016
	- ROTA para lista de contatos
*/
function verificarAutenticacao(request, response, next) {
	if(request.isAuthenticated()) {
		return next();
	}else {
		response.status('401').json('Não autorizado');
	}
}


module.exports = function(app) {

	var controller = app.controllers.contato;

	app.route('/contatos')
		.get(verificarAutenticacao, controller.listarContatos)
		.post(verificarAutenticacao, controller.salvarContato);

	app.route('/contatos/:id')
		.get(verificarAutenticacao, controller.obterContato)
		.delete(verificarAutenticacao, controller.removerContato);
};