var express = require('express');
var app = express();

app.use(express.static('public'));
app.set('view engine', 'ejs');

app.get('/', function (request, response) {
	response.render('index');
});

app.get('/projects', function (request, response) {
	response.render('projects');
});

app.get('/about', function (request, response) {
	response.render('about');
});

app.get('/contact', function (request, response) {
	response.render('contact');
});

app.listen(3000, function () {
	console.log('Portfolio site listening on port 3000!');
});