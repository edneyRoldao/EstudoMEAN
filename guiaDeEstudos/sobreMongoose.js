/*
	Edney Roldão - 20/05/2016
	- SOBRE MONGOOSE - OBJECT-DOCUMENT MODELER ( ODM )

	- O mongoose é uma biblioteca ODM desenvolvida pela própria equipe do mongoDB.

	- É uma camada que está em torno do driver do mongoDB que, gerencia relacionamentos e executa validações,
	  entre outras funcionalidades.

	- Sua principal função está na criação de schemas que servem como molde para criação dos nossos objectModel.
	  Esses schemas são uma forma que obter uma estrutura de tipos de dados e validações definidas, garantindo assim
	  uma tipogem forte que é uma das características dos bancos de dados relacionais que está ausente no mongoDB de 
	  forma nativa.

	- Com mongoose podemos garantir que uma determinada propriedade do objeto que será persistida no banco tenha um 
	  tipo defino para que seja possível aplicar validações, além disso podemos definir propriedade que devem ter
	  valores únicos e propriedades que não podem estar nulas (required)

	- Também usamos essa biblioteca para obter a conexão com o mongoDB.

	- O mongoose já vem com o driver do mongo em sua biblioteca.

	- INSTALAÇÃO DO MONGOOSE:
		na raíz do projeto via linha de comando: 	npm install mongoose --save 



	- Estudar a parte de pesquisa desse API pois tem muitos detalhes, exemplos:
		-> exec (esse cara retorna uma promise, por isso que temos funções de callback)
		-> find
		-> then
		-> select
		-> where
		-> findByIdAndRemove
		-> findById
		-> findByIdAndUpdate
		-> update
		-> create (esse já retorna uma promise por padrão, por isso que não temos exec() aqui)

	- Com o mongoose podemos persistir documentos de duas formas: Uma é diretamente pelo model parecido com os
	  métodos estáticos em java, a outra forma é a partir de uma instância de model, ou seja, acesso à functions
	  a partir de um objeto. Diferença é que os métodos a acessados a partir do uma instancia de model, não retornam
	  uma promise, assim temos que passar uma função de callback diretamente.

	- PLUGINS DO MONGOOSE 
		Exitem alguns recursos que não estão presentes nativamente no mongoose, assim temos que baixar vai npm.

			-> Para utilizar a função findOrCreate, precisamos baixar o plugin abaixo:
			     raíz do projeto, linha de comando: 	npm install mongoose-findorcreate --save


*/