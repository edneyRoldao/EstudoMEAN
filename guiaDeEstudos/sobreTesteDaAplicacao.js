/*
	Edney Roldão - 25/05/2016
	- TESTES DA APLICAÇÃO

	- Uma ferramenta de testes de código é um programa que utiliza nosso código e compara
	  o resultado de uma execução com um valor, ou estado de um objeto, que esperamos que
	  seja devolvido ou alterado.

	- JASMINE: Uma das ferramentas mais populares para testes com javaScript, tanto para testes
	           unitários quando testes de ponta-a-ponta.

	           -> Teste de ponta-a-ponta (e2e): Os testes end-to-end verifica se o fluxo do requisito
	              de uma aplicação do ponto de vista do usuário está funcionando como projetado do 
	              inicio ao fim.

	           -> Não depende de navegador e nem da DOM para funcionar. 

     	       -> Instalar globalmente: npm install jasmine-core -g	(deve ser executado como administrador)

	           -> Instalar no projeto: 	npm install jasmine-core --save-dev	(a partir da raíz do projeto)


	- KARMA: Uma ferramenta que dispara testes unitários automáticos a fim de fornecer, feedback imediato
	         para o desenvolvedor do resultado de seus testes.

	         -> Ferramenta de testes focada em produtividade pois livra o desenvolvedor, de seus detalhes 
	            de configuração. 

	         -> Não é exclusivo do angularJS, pode ser utilizado por qualquer aplicação que queira automatizar
	            seus teste

	         -> Instalar o cliente globalmente: npm install karma-cli -g	(deve ser executado como administrador)

	         -> Instalar no projeto: 	npm install karma --save-dev	(a partir da raíz do projeto)

	         -> Gerar o arquivo karma.config.js: 	karma init config/karma.config.js (a partir da raíz do projeto)

			 -> Para iniciar os testes com o karma um usando o phantomJS (browser headless)
			 		karma start config/karma.config.js 	(na raíz do projeto)

			 -> Para iniciar os testes com o karma.
			 		karma start config/karma.config.js --single-run --browsers PhantomJS

	         OBS: Não faz sentido usar o Karma, se não exister testes implementados.


	- ANGULAR-MOCKS: Como o angular utiliza em demasia injeção de dependência, podemos solicitar diretamente de seu
	                 seu sistema de injeção de quais artefatos precisamos em nossos specs por meio do angular-mocks.
	                 No caso, precisamos injetar arquivos como controllers e services para os nossos teste

	                 -> Instalar: podemos instalar via bower: 	bower install angular-mocks --save-dev (na raíz)


	- PROTRACTOR: Ferramenta específica para testes e2e em aplicações com angularJS que facilita a utilização
				  do selenium. 

				  -> Sua criação foi motivada devido o selelium suportar apenas requisições síncronas, porém como estamos
				     trabalhando com requisições assíncronas, e o protractor nos fornece funcionalidades que as suportam.

				  -> Instalar global: 	npm install protractor -g

				  -> Agora precisamos instalar e atualizar o Selenium com o comando: 	webdriver-manager update --standalone

				  -> OBS: Como o selenium é desenvolvido em Java, precisamos do JDK instalado para o selenium e protractor funcionarem

				  -> SUBIR O SERVIDOR STANDALONE DO SELENIUM:
				  		webdriver-manager start		(podemos ver no brower em: http://localhost:4444/wd/hub)

		-> Para iniciar o protractor:
				protractor config/protractor.js 

*/