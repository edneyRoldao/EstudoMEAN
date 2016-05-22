/*
	Edney Roldão - 21/05/2016
	- SOBRE EXPRESS-SESSION E COOKIE-PARSER

	- INSTALAR:
		Abra a linha de comando na raíz do projeto e digite:
			-> npm install express-session cookie-parser --save

	- COOKIE-PARSER
		Esse middleware realiza o parser do header de cookies de requisição populando
		request.cookies e armazena o ID da sessão.

	- EXPRESS-SESSION
		Esse middleware cria por padrão a sessão de usuário em memória, ele recebe 3 parâmetros a saber:

		-> secret: o cookie recebe esse secret para evitar adulteração
		-> resave: garante que as informações da sessão serão acessíveis através de cookie a cada requisição
		-> saveUninitialized: resolve problemas a requisição de permissão antes de atribuir um cookie

*/