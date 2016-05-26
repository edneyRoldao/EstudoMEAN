/*
	Edney Roldão - 26/05/2016
*/
var contatosPage = function() {

	this.visitar = function() {
		browser.get('http://localhost:3000/#/contatos');
	};

	this.obterUsuarioLogado = function(nome) {
		return element(by.id("usuario-logado")).getText();
	};

	this.obterTotalItensLista = function() {
		return element.all(by.repeater('cont in listaContatos')).count();
	};

	this.removerPrimeiroItemLista = function() {
		element(by.repeater('cont in listaContatos').row(0)).element(by.css('.btn')).click();
	};

};

module.exports = contatosPage;