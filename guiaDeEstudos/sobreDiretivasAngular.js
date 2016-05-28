/*
	Edney Roldão - 18/05/2016
	- Sobre diretivas do AngularJS

	- ng-app:
		Essa diretiva apenas indica que a tag e seus filhos serão gerenciados pelo angularJS

	- ng-controller:
		Fornece os dados e responde a ações dos componentes das páginas

	- ng-click:
		Funciona como o evento onclick do js, só que nesse caso, temos que vincular com uma
		function no $scope do controller

	- ng-Route:
		É um módulo do angular utilizado quando trabalhamos com single page application

	- ng-view:
		A diretiva ng-view sinaliza para o sistema de rotas a área da página que receberá
		views parciais.

	- ng-repeat
		Utilizado para criar um laço de repetição de elementos (tag) a partir de um objeto 
		array declarado em $scope. Gealmente usamos em uma <tr> de uma tabela.
		-> ocorre um processo semelhando ao forIn do javascript

	- ng-model:
		Essa é um das principais diretivas do angular, ela vai atuar no processo de two way databind.
		Ela difine valores em $scope, geralmente utilizada em tags como: input, select e textArea.

	- ng-show e ng-hide:
		Exibe e escondo valores das tags respactivamente quando o valar da expressão for true

	- ng-href:
		Esse diretiva garante que o link só funcione depois da AE associada à mesma ter sido avaliada pelo angular

*/
