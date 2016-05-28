/*
	Edney Roldão - 27/05/2016
	- INTEGRAÇÃO CONTÍNUA COM: travis, phantomJS

		- TRAVIS: Um servidor de integração contínua como serviço (as a service) integrado com
			      o github e suporta plataformas como node e java.

			- Para usar o travis precisamos de uma conta no github e ter um repositório criado
			  para o nosso projeto.

			- Na raíz do projeto precisamos criar um arquivo chamado .travis.yml

		- PHANTOM_JS: Um brower headless utilizado pelo karma para realização dos testes unitários
					  e e2e.

		- Instalar o phantomJS específico para os teste com o karma
			-> npm install karma-phantomjs-launcher --save-dev  (na raíz do projeto)
			depois...	npm install phantomjs-prebuilt --save-dev

		- EXECUTANDO O KARMA PELO PHANTOM_JS
			pela linha de comando na raíz do projeto: 	karma start config/karma.config.js --single-run --browsers PhantomJS

*/