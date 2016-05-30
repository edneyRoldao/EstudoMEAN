/*
	Edney Roldão - 25/05/2016
	- ARQUIVO DE TESTES DO SELENIUM E PROTRACTOR DA PÁGINA: contatos.html
*/
var ContatosPage = new require('./pages/ContatosPage.js');

describe('Página Principal', function () {

	var pagina = new ContatosPage();

	beforeEach(function()  {
		pagina.visitar();
	});

	it('Deve estar logado', function() {
		pagina.obterUsuarioLogado().then(function(texto) {
			expect(texto.trim().length).toBeGreaterThan(0);
		});
	});

	it('deve demover um contato da lista', function() {
		var totalAntes = pagina.obterTotalItensLista();
		pagina.removerPrimeiroItemLista();
		var totalDepois = pagina.obterTotalItensLista();
		expect(totalDepois).toBeLessThan(totalAntes);
	});

});



