'use strict';

var http = require('http');

var app = require('./app');

var port = app.get('port');

require('./routes');

try {
	http.createServer(app).listen(port, function () {
		console.log('Visit http://localhost:' + port + ' to begin yor work');
	});
} catch(err){console.log("Error = ",err);}