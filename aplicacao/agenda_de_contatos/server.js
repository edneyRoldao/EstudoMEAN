/*
	Edney Roldão - 17/05/2016
	- Servidor do nodeJS
*/

var http = require('http');
var app = require('./config/express')();

http.createServer(app).listen(app.get('port'), function() {
	console.log('O servidor do Express esta escutando na porta ' + app.get('port'));
});

/* Podemos rodar esse arquivo no terminal para verifcar o seu funcionamento. */