/*
	Edney Roldão - 17/05/2016
	- Primeiro teste de servidor
*/
var http = require('http');

http.createServer(function(request, response) {
	response.writeHead(200, {'Content-Type': 'text/plain'});
	response.end('Primeiro teste de servidor no estudo de MEAN \n servidor criado pelo nodeJS');
}).listen(3000, '127.0.0.1');

/* 
	Passo 01:
		execute este arquivo pelo node: (node serverTeste01)
	Passo 02:
		Testar o servidor pelo browser no em : http://localhost:3000
*/