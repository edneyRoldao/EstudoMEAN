/*
	Edney Roldão - 20/05/2016
	- Base de dados inicial para os testes de integração do mongoDB com a nossa aplicação.
*/

db.agenda.drop();

use agenda

var listaContatos = [
	{"nome": "Edney Roldão", "contato": "edy@gmai.com"},
	{"nome": "Giselle Nogueira", "contato": "gi@yahoo.com.br"},
	{"nome": "Marjorie Roldão", "contato": "marjorie@gmail.com"},
	{"nome": "Nadine Roldão", "contato": "nadine@gmail.com"},
	{"nome": "Marilene Roldão", "contato": "marilene@terra.com.br"}	
];

db.contatos.insert(listaContatos);

show collections