/*
	Edney Roldão - 20/05/2016
	- Schema Model de Contato
*/
var mongoose = require('mongoose');

module.exports = function() {

	// Vamos garantir que nome e email sejam do tipo string
	var schema = mongoose.Schema({
		nome: {type: String, required: true},
		email: {type: String, required: true, index: {unique: true}}
	});

	return mongoose.model('Contato', schema);	
};