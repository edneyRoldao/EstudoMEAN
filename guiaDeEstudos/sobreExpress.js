/*
	Edney Roldão - 17/05/2016
	- Sobre express:
		O express estende as capacidades do servidor padrão do nodeJS adicionando middlewares e 
		outros capacidades como views e rotas.

	- Middlewares:
		São funções que lidam com requisições.

	- O express será instalado via npm após a criação do arquivo package.json

	- comando: npm install express --save (deve ser executado pelo terminal no mesmo lugar do arquivo package.json) 

	- Depois de tudo isso devemos criar um módulo de configuração no nodeJS para o express (config/express.js)

	- FUNÇÃO USE
		
		->  Função app.use é utilizada para associar middlewares à nossa instancia do Express. Ele também pode ser
		    usado para ativar middlewares para uma rota específica. A diferença é que ele considerará a rota independente
		    do verbo utilizado, seja ele GET, PUT, DELETE ou POST.  

*/
