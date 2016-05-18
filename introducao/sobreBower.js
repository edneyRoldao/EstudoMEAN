/*
	Edney Roldão - 18/05/2016
	- BOWER - gerenciador de dependências para bibliotecas frontend.

	- Utilizamos o bower para gerenciar bibliotecas como angular, bootstrap, jquery dentre outros.
	  Isso significa que não precisamos mais ficar entrando nos sites dessas bibliotecas para 
	  baixar tais arquivos.

	- Depois de uma biblioteca definida, podemos utiliza-la em outros projetos fácilmente.

	- INSTALAR 
		-> Para usar o bower temos que ter: nodeJS, npm e git já instalados na máquina.
		-> O comando abaixo deve ser executado no terminal como administrador
			npm install bower -g

	- USAR O BOWER
		-> na raiz do projeto digitar o comando:
			bower init (será gerado um arquivo bower.json que funciona como um pom.xml do maven)
		-> Agora basta baixar a biblioteca desejada com o comando:
			bower install angular --save (será criada uma pasta bower_components com os arquivos)

	- CONFIGURAÇÕES ADICIONAIS
		Podemos alterar o local padrão onde o bower baixa as dependências (bower_components)

		-> temos que criar o arquivo .bowerrc pelo ternimal na raiz do projeto com o comando:
			No windows: echo "" > .bowerrc	
			No mac: touch .bowerrc

		-> No .bowerrc adicione o conteúdo abaixo:
			{ "directory": "coloque/nome/caminho/desejado" }

		-> Apague a pasta padrão que foi criada antes e execute na raiz do projeto:
			bower install (os arquivos serão baixados novamente e colocados na nova pasta)

	http://bower.io/
*/
