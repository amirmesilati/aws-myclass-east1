var express = require('express');
var port = process.env.PORT || 8080;
var app = express();

app.get('/', function(req, res) {
  res.send({
    "Output" : "Hello GET REQUEST World!"
  });
});

app.post('/', function(req, res) {
  res.send({
    "Output" : "Hello POST REQUEST World!"
  });
});

app.listen(port);
module.exports = app;
