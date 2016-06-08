/*
	Edney Roldão - 08/06/2016
*/
module.exports = {
	env: 'production',
	db: process.env.OPENSHIFT_MONGODB_DB_URL + 'agenda',
	clientID: process.env.CLIENT_ID,
	clientSecret: process.env.CLIENT_SECRET,
	port: process.env.OPENSHIFT_NODEJS_PORT,
	address: process.env.OPENSHIFT_NODEJS_IP,
	domain: process.env.OPENSHIFT_APP_DNS
};
