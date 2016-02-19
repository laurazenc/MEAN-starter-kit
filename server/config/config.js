var path = require('path');
var rootPath = path.normalize(__dirname + '/../../');
module.exports = {
	development:{
		rootPath: rootPath,
		db: "<hostname>:<port>/<database>",
		port: process.env.PORT || 3000
	},
	production:{
		rootPath: rootPath,
		db: "production:DB",
		port: process.env.PORT || 80
	},
	secretKey	: "YourSecretKey"
}
