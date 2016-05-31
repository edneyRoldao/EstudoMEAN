/*
	Edney Roldão - 31/05/2016
	- Esse arquivo é responsável por retornar um módulo com as configurações das variáveis de ambiente
	  de acordo com o valor da variável de ambiente process.env.NODE_ENV .

	- Esse variáveis são usadadas pelos arquivos: server.js, protractor.js e passport.js .
	
*/
module.exports = function() {
	return require('./env/' + process.env.NODE_ENV + '.js');
};