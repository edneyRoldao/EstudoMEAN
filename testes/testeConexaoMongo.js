/*
	Edney Roldão - 20/05/2016
	- Arquivo que testa a conexão com o mongoDB
*/
var MongoClient = require('mongodb').MongoClient;
var ObjectID = require('mongodb').ObjectID;

var _idPesquisado =  new ObjectID("573f0b9785ee31f95988dd89");

MongoClient.connect('mongodb://127.0.0.1:27017/agenda', function(erro, db) {
	if(erro) throw err;
	db.collection('contatos').findOne({_id: _idPesquisado}, function(erro, contato) {
		if(erro) throw err;
		console.log(contato);
	});
});