/*
	Edney Roldão  - 17/05/2016
	- Arquivo de testes diversos
*/

var controller = {};

var contatos = [
	{_id: 1, nome: 'contato exemplo 01', email: 'cont01@mean.com'},
	{_id: 2, nome: 'contato exemplo 02', email: 'cont02@mean.com'},
	{_id: 3, nome: 'contato exemplo 03', email: 'cont03@mean.com'},
	{_id: 4, nome: 'contato exemplo 04', email: 'cont04@mean.com'},
	{_id: 4, nome: 'contato exemplo 04', email: 'cont04@mean.com'},
	{_id: 4, nome: 'contato exemplo 04', email: 'cont04@mean.com'},
	{_id: 4, nome: 'contato exemplo 04', email: 'cont04@mean.com'}
];

controller.obterContato = function(id) {

	var contato = contatos.filter(function(elemento) {
		return elemento._id === id;
	})[3];

	console.log(typeof contato);
	console.log(contato);

};

controller.obterContato(4);