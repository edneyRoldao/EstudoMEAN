/*
	Edney Roldão - 21/05/2016
	- SOBRE MIDDLEWARE

	- São funções que lidam com requisições. Uma pilha de middleware's pode ser aplicada a uma 
	  mesma requisição para atingir diversas finalidades (segurança, logging, etc). Cada middleware
	  passa o controle para o próximo até que todos sejam aplicados.

	- Geralmente utilizamos esses midleware's no arquivo de configuração do nosso servidor que é o 
	  express.

	- MIDDLEWARE HELL
		No servidor express, o devemos saber exatamente em qual posição da pilha configurar um
		novo middleware e seu impacto nos demais.

*/
213