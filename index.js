var pack = require('./package');
var path = require('path');
var express = require('express');
var app = express();

module.exports = {
    version: pack.version,
    dist: path.resolve(__dirname, 'dist')
};

// Add headers
app.use(function (req, res, next) {

    // Website you wish to allow to connect
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost');

    // Request methods you wish to allow
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

    // Request headers you wish to allow
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

    // Set to true if you need the website to include cookies in the requests sent
    // to the API (e.g. in case you use sessions)
    res.setHeader('Access-Control-Allow-Credentials', true);

    // Pass to next layer of middleware
    next();
});

app.use(express.static(__dirname + '/dist'));

app.get('/', function (req, res) {
  res.sendFile('dist/index.html');
});

var port = process.env.PORT || 8080;
app.listen(port, function () {
  console.log('Example app listening on port: ' + port);
});