/*
	Edney Roldão - 22/05/2016
	- GRUNT - É um Task Runner

			- É uma solução frontend para executa scripts relacionados ao build do projeto, parecido com
			  o que fazemos com maven e ant no java.

			- Algumas das tarefas que podemos automatizar é o processo de minificação dos asquivos js e css,
			  criar uma cópia do projeto original a fim de manter o projeto original íntegro.

			- O grunt precisa ser instalado globalmente e depois por projeto.

	- INSTALAR O GRUNT-CLI globalmente para que tenhamos acesso pelo ternumal em qualquer lugar.
		(no windows tem que executar pelo cmd como administrador)
		npm install grunt-cli -g


	- INSTALAR O GRUNT no projeto
		na raíz do projeto: 	npm install grunt --save-dev

	- PLUGINS: Para configurar as tarefas, temos que instalar plugins do grunt, segue a lista:

		-> npm install grunt-contrib-copy --save-dev (cria uma copia do projeto em uma pasta pré-definida)
		-> npm install grunt-contrib-clean --save-dev (limpa os arquivos e pastas criadas pelo processo acima)
		-> npm install grunt-contrib-concat --save-dev (concatena arquivos css e js)	
		-> npm install grunt-contrib-uglify --save-dev (minifica arquivos js)	
		-> npm install grunt-contrib-cssmin --save-dev (minifica arquivos css)
		-> npm install grunt-usemin --save-dev
		-> npm install grunt-ng-annotate --save-dev	

*/