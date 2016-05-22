/*
	Edney Roldão - 21/05/2016
	- Arquivo que define as rotas envolvidas no processo de autenticação.
*/
var passport = require('passport');

module.exports = function(app) {
	app.get('/auth/github', passport.authenticate('github'));
	app.get('/auth/github/callback', passport.authenticate('github', {successRedirect: '/'}));
	app.get('/logout', function(request, response) {
		request.logOut();
		response.redirect('/');
	});
};

