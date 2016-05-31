/*
	Edney Roldão - 21/05/2016
	- Base de dados iniciais da aplicação 
*/

// entrando no banco
use agenda

// Criando a lista de contatos
var listaInicial = [
	{nome: "Giselle", email: "giselle@gmail.com"},
	{nome: "Nadine", email: "nadine@gmail.com"},
	{nome: "Marjorie", email: "marjorie@gmail.com"},
	{nome: "Edney", email: "edney@gmail.com"}
];

// Inserindo 
db.contatos.insert(listaInicial)

