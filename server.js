const express = require('express');
const app = express();

app.use(express.static('assets'));

app.get('/', function (req, res) {
	res.send('Hello world');
});

app.get('/image', function (req, res) {
	res.sendFile('assets/ronsie.jpg' , { root : __dirname});
});

app.get('/userform', function (req, res) {
	res.sendFile('/index.html')
	const response = {
		first_name: req.query.first_name,
		last_name: req.query.last_name
	};
	res.json(response);
});

const server = app.listen(3000, 'localhost', function() {
	const host = server.address().address;
	const port = server.address().port;

	console.log('Przykładowa aplikacja nasłuchuje na http://' + host + ':' + port);
});