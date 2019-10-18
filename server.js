var express = require('express');
var app = express();
app.use(express.static('assets'));//asets to katalog w kotrym trzymam css  zdjecia

app.get('/userform', function (req, res) {
    res.sendFile('/index.html');
    const response = {
        first_name: req.query.first_name,
        last_name: req.query.last_name
    };
    res.json(response);
});

var server = app.listen(3000, 'localhost', function() {
    var host = server.address().address;
    var port = server.address().port;

    console.log('Przykładowa aplikacja nasłuchuje na http://' + host + ':' + port);
});


