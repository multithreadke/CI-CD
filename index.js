var express = require('express');
var app = express();

app.get('/api/v1/home', function (req, res) {
    res.send('hello world');
});

var server = app.listen(3000, function () {
    var host = server.address().address;
    var port = server.address().port;
    console.log('cekl-web app is listening at http://%s:%s', host, port);
});