/*
	Edney Roldão - 07/06/2016
	- DEPLOY DA APLICAÇÃO

	Assim com foi feita para os testes da aplicação usando o TaaS (test as a service), vamos seguir o mesmo
	para o deploy da aplicação, que no caso seria PaaS (platform as a service).

	- Vamos utilizar o Openshift como nosso PaaS, este possui integração com o github e travis para a realização
	  de deploy contínuo.

	- OPENSHIFT: é um PaaS criado pela hedHat
		- Vamos utilizar seu client de linha de comando o rhc. Para instalar esse assistente, precisamos ter
		  instalado na máquina, git e o ruby (se for windows, tem que ser a versão 2.0.0)

		INSTALAR:
			com o ruby instalado, digite na linha de comando: 
				-> no mac: sudo gem install rhc
				-> no windows: gem install rhc

				Depois de instalado, precisamos configurar o openshift pelo comando rhc setup

	- PaaS: Uma PaaS facilita o deploy da aplicação reduzindo a complexidade envolvida no processo, inclusive
		    fornecendo ferramentas que lidam com detalhes de infraestrutura.

*/