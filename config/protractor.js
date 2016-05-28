/*
	Edney Roldão - 25/05/2016
	- ARQUIVO DE CONFIGURAÇÃO DO PROTRACTOR
*/
exports.config = {
	specs: ['../test/e2e/**/*Spec.js'],
	onPrepare: function() {
		browser.driver.get('http://localhost:3000').then(function() {
			browser.driver.findElement(by.id('entrar')).click();
			browser.driver.findElement(by.id('login_field')).sendKeys('edneyroldao@gmail.com');
			browser.driver.findElement(by.id('password')).sendKeys('Rem@69378');
			browser.driver.findElement(by.name('commit')).click();
		});
	}
};