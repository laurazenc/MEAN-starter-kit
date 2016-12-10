var path = require('path');
var rootPath = path.normalize(__dirname + '/../../');
module.exports = {
	development:{
		rootPath: rootPath,
		// db: "<hostname>:<port>/<database>",
		db: "mongodb://localhost:27017/db_app",
		port: process.env.PORT || 9000
	},
	production:{
		rootPath: rootPath,
		db: "production:DB",
		port: process.env.PORT || 80
	}
}
