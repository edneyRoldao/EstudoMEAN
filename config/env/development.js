/*
	Edney Roldão - 31/05/2016
	- Expondo um objeto com as variáveis de ambiente utilizadas para o desenvolvimento da aplicação.

	- Esse variáveis são usadadas pelos arquivos: server.js, protractor.js e passport.js .
	
*/
module.exports = {
	env: 'development',
	db: 'mongodb://localhost/agenda',
	clientID: process.env.CLIENT_ID,
	clientSecret: process.env.CLIENT_SECRET,
	seleniumUser: process.env.SELENIUM_USER,
	seleniumUserPassword: process.env.SELENIUM_USER_PASSWORD,
	port: 3000,
	address: 'localhost',
	domain: 'localhost'
};