'use strict';
var path = require('path');
var express = require('express');

var app = module.exports = exports = express();
var logger = require('morgan');

//Configuration
app.set('port', process.env.PORT || 8123);
app.set('view engine','jade');
app.set('views', path.join(__dirname, 'views'));

//Middleware
app.use(logger('dev')); //app.use(express.logger('dev'));
//app.use(app.router);
//get('/' ...); app.post(...);