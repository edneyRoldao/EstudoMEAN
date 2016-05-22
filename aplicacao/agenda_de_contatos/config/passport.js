/*
	Edney Roldão - 21/05/2016
	- Configurações do passport com a estratégia de autenticação do github
*/
var passport = require('passport');
var GitHubStrategy = require('passport-github').Strategy;
var mongoose = require('mongoose');

module.exports = function() {

	var Usuario = mongoose.model('Usuario');

	passport.use(new GitHubStrategy({
		clientID: 'a5526d4819cf7b2c5508',
		clientSecret: 'CLIENT SECRET DA APLICAÇÃO',
		callbackURL: 'http://localhost:3000/auth/github/callback'
	}, function(accessToken, refreshToken, profile, done) {

		Usuario.findOrCreate(
			{"login": profile.username},
			{"nome": profile.username},
			function(erro, usuario) {
				if(erro) {
					console.log(erro);
					return done(erro);
				}
				return done(null, usuario);
			});

	}));

	/*
		Chamado apenas uma vez e recebe o usuário do nosso banco disponibilizado
		pelo callback da estratégia de autenticação. Realizará a serialização 
		apenas do ObjectId  
	*/
	passport.serializeUser(function(usuario, done) {
		done(null, usuario._id);
	});


	passport.deserializeUser(function(id, done) {
		Usuario.findById(id).exec().then(function(usuario) {
			done(null, usuario);
		});
	});

};