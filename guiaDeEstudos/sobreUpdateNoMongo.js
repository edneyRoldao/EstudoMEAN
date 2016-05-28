/*
	Edney Roldão - 20/05/2016
	- SOBRE UPDATE

	- No mongoDB existem duas formas de se realizar atualizações de documentos que devem ser esclarecidas.

	- Temos um processo de atualização chamada document replace. Esse processo substitui totalmente o objeto
	  que está no banco, incluindo o nome e tipo das propriedades.

	- Para evitar o processo de document replace, utilizamos a propriedade $set

	- UPSERTS
		-> Existe uma forma de update que, caso o documento a ser modificado não existir, o valor é persistido como
		   um novo documento. Para funcionar, basta adicionar um 3º parâmetro passando true.

*/

// criando um DB para os testes
use test01

// Declarações para os testes
var documento = {"nome": "edy"};
var novoDocumento = {idade: 25, casado: true};
var criterioDeBusca = {"nome": "edy"};

// inserindo um documento
db.documentos.insert(documento);

// Verificando se o documento foi persistido
db.documentos.find()


// DOCUMENT REPLACE - perceba que vamos alterar totalmente o documento inserido acima
db.documentos.update(criterioDeBusca, novoDocumento);
// Veja com os propriedades e valores foram modificados
db.documentos.find()



// usando $SET para escapar do document replace
var criterioDeBusca2 = {idade: 25};
var novoDocumento2 = {casado: false};

//Dessa forma as propriedades não são alteraadas
db.documentos.update(criterioDeBusca2, {$set: novoDocumento2});

// Veja que só o valor da propriedade foi alterado. (obs: nesse caso, se fosse um document replace, a prop idade deixaria de existir)
db.documentos.find()


// UPSERTS - vou criar um criterio de busca de um documento que não existe, com isso, teremos um insert no lugar do update. 
var criterioDeBuscaSemResultado = {id: 42};
var novoDocumento3 = {idade: 34, casado: true};

// Para o upsert funcionar, precisamos passar true no 3º parâmetro
db.documentos.update(criterioDeBuscaSemResultado, novoDocumento3, true);

// Veja que agora temos mais um documento e nada foi modificado
db.documentos.find()
