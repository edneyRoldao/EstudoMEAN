/*
	Edney Roldão - 17/05/2016
	- Servidor do nodeJS
*/

var config = require('./config/config')();
var http = require('http');
var app = require('./config/express')();
require('./config/passport')();
require('./config/database.js')(config.db);

http.createServer(app).listen(app.get('port'), function() {
	console.log('O servidor do Express esta escutando na porta ' + app.get('port'));
});

/* Temos que rodar esse arquivo pelo terminal para subir o servidor */
