const express = require('express');
const  app = express();
const port = process.env.PORT || 3000;

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

app.listen(port, function () {
	console.log('Katherine Oh is listening on port ' + port);
});