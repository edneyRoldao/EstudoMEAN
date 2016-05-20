/*
	Edney Roldão - 20/05/2016
	SOBRE MONGO_DB

	- O mongo armazena seus documentos no formato BSON (binary JSON), este formarto suporta 
	  mais que o dobro de tipos de dados suportados pelo JSON.

	- OBJECT_ID
		-> Todo documento criado pelo mongo recebe automaticamente a chave _id com um valor
		   do tipo objectId. A principio temos a alusão de que essa propriedade é uma chave
		   única similar aos DB relacionais, porém, o mongo trabalha com o conceito de collections,
		   e um mesmo _id pode estar presente em mais de uma collection.

    - Podemos ter várias instâncias do mongo rodando na máquina
    - Uma instancia pode ter vários banco de dados
    - Um banco de dados pode ter várias collections

	- OPERAÇÃO LIKE
		Em mongo não temos a operaçõa like, porém podemos usar expressões regulares

	- UPDATE
		Temos que tomar cuidado em operações de update, pois corremos o risco de alterar todas as
		propriedades de um documento. Para prevenir esse comportamento, usamos o operador $set


*/

// QUERIES

// Object cursor
var listaContatos = db.contatos.find();
listaContatos


db.contatos.findOne();

// find() é igual a find({})

// Temos o uma pesquisa semelhante ao like (qualquer nome com edy)
var criterio = {"nome": /edy/i};
var contatos = db.contatos.find(criterio);

// Podemos aplicar a operação de count usando expressões regulares
db.contatos.count({"nome": /edy/i});

// Apagando todos os documentos de uma collection
db.contatos.remove();


// Forma legal de atualizar com mongo
var criterio = {"email": "edney@gmail.com"};
var contato = db.contatos.find(criterio);
contato.nome = "nome alterado";
db.update(criterio, contato);

// Forma correta de atualizar
db.update(criterio, {"$set": contato});


/* Muitas vezes queremos realizar uma atualização, mas caso o documento não exista, queremos que ele seja incluido.
   Podemos solicitar esse comportamento passando o valor true como 3º arg da função update  */
var doc02 = {"nome": "João", "email": "jao@bol.com"};
db.contatos.update({"nome": /4/}, doc02, true);


