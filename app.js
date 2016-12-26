'use strict';
var path = require('path');
var express = require('express');
var stylus = require('stylus');

var app = module.exports = exports = express();
var logger = require('morgan');

//Configuration
app.set('port', process.env.PORT || 8123);
app.set('view engine','jade');
app.set('views', path.join(__dirname, 'views'));

//Middleware
//app.use(express.logger('dev'));
app.use(express.static(path.join(__dirname, 'public')));
app.use(logger('dev'));
app.use(stylus.middleware({
	src: './public',
	compress: true
}));
//app.use(express.static(__dirname + 'public'));

//app.use(app.router);
//get('/' ...); app.post(...);