/*
	Edney Roldão - 31/05/2016
	- Populando o mongoDB para os nossos testes
*/
var MongoClient = require('mongodb').MongoClient;

var contatos = [
	{nome: 'Giselle', email: 'gi@mail.com'},
	{nome: 'Marjorie', email: 'marjorie@mail.com'},
	{nome: 'Nadine', email: 'nadine@mail.com'},
	{nome: 'Edney', email: 'edy@mail.com'}	
];

MongoClient.connect('mongodb://127.0.0.1:27017/agenda_test', function(erro, db) {
	if(erro) throw err;

	db.dropDatabase(function(err) {
		if(err) return console.log(err);

		console.log('Banco apagado com sucesso !');

		db.collection('contatos').insert(contatos, function(err, inserted) {
			console.log('Banco populado com sucesso !');
			
			process.exit(0);
		});
	});
});