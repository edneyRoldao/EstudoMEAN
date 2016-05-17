/*
	Edney Roldão - 17/05/2016
	
	- Considerações sobre os verbos DELETE e PUT
		-> Nem todos os browsers aceitam esses verbos.
		-> Uma solução utilizada é usar o verbo POST, só que devemos adicionar
		   no header da requisição o content-type X-HTTP-Method-Override. Nele 
		   informamos qual verbo queremos utilizar.
		-> Para esse solução, o servidor precisa estar preparado para extrair essa 
		   informação e chamar a rota para o tipo de verbo desejado.

	- Middleware method-override no EXPRESS
		-> Esse middleware cuidará automáticamente do processo citado acima, garantindo
		   que as rotas para os verbos sejam chamadas corretamente.
		-> Para isso funcionar, ele depende que a requisição seja parseada através do
		   middleware body-parser

	- INSTALAR body-parser e method-override
		-> Na raíz do projeto onde se encontra o package.json, digite no terminal:

		body-parser: 	     npm install body-parser --save
		method-override: 	 npm install method-override --save

	- Agora precisamos ativar esses middleware's no arquivo de configuração do express

*/
