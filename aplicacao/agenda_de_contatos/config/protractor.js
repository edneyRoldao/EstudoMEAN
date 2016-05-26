/*
	Edney Roldão - 25/05/2016
	- ARQUIVO DE CONFIGURAÇÃO DO PROTRACTOR
*/
exports.config = {
	specs: ['../test/e2e/**/*Spec.js'],
	onPrepare: function() {
		browser.driver.get('http://localhost:3000').then(function() {
			browser.driver.findElement(by.id('entrar')).click();
			browser.driver.findElement(by.id('login_field')).sendKeys('userEmail');
			browser.driver.findElement(by.id('password')).sendKeys('senhaGithub');
			browser.driver.findElement(by.name('commit')).click();
		});
	}
};