/*
	Edney Roldão - 25/05/2016
	- ARQUIVO DE TESTES DO SELENIUM E PROTRACTOR DA PÁGINA: contato.html
*/
var ContatoPage = new require('./pages/contatoPage.js');

describe('Cadastro de contatos', function() {

	var pagina = new ContatoPage();

	beforeEach(function() {
		pagina.visitar();
	});

	it('deve cadastrar um contato', function() {
		var aleatorio = Math.floor((Math.random() * 10000000) + 1);

		pagina.digitarNome('teste' + aleatorio);
		pagina.digitarEmail('teste@mail' + aleatorio);
		pagina.selecionarEmergenciaDaLista();
		pagina.salvar();

		expect(pagina.obterMensagem()).toContain('sucesso') ;
	});

});
