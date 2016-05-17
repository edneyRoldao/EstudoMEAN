/*
	Edney Roldão - 17/05/2016
	- HOME CONTROLLER
*/

module.exports = function() {
	var controller = {};

	controller.index = function(request, response) {
		/* Aqui passamos a view que será retornada no primeiro parâmetro, e no segundo passamos 
		   um objeto javascript com dados que será consumido por esta view */
		response.render('index', {nome: 'Express'});
	};

	return controller;
};

/*
	OBS: o valor 'Express' do atributo nome, vai preencher os locais da view passada no primeiro 
	     parâmetro que estão definidas assim: <%=nome %>
*/