var pack = require('./package');
var path = require('path');
var express = require('express');
var app = express();

module.exports = {
    version: pack.version,
    dist: path.resolve(__dirname, 'dist')
};

app.use(express.static(__dirname + '/dist'));

app.get('/', function (req, res) {
  res.sendFile('dist/index.html');
});

let port = process.env.PORT || 8080;
app.listen(port, function () {
  console.log('Example app listening on port: ' + port);
});