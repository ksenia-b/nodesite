'use strict';

var express = require('express');

var app = module.exports = exports = express();
var logger = require('morgan');

//Configuration
app.set('port', process.env.PORT || 8123);
app.set('views','./views');
app.set('view engine','jade');

//Middleware
app.use(logger('dev')); //app.use(express.logger('dev'));
//app.use(app.router);
//app.use(express.static(path.join(__dirname, 'public')));


app.get('/', function(req,res){
	res.send('Hello, world!')
});


//app.get('/' ...); app.post(...);