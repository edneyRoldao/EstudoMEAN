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
*/