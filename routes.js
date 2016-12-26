'use strict';

var app = require('./app');

app.get('/', function(req,res){
	//res.send('Hello, world!')
	res.render('pages/index');
	req.url = '/index.html';
	next();
});
app.get('/*.html', function (req, res, next) {
	res.render('pages/'+ req.params[0]);
})

