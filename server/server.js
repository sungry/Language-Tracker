var express = require('express');
var app = express();

app.get('/', function(req, res) {
  res.send("My first server with express!");
});

app.get('/notes', function(req, res) {
  res.send("Here are your notes");
});

app.get('/*', function(req, res) {
  res.redirect('/');
});

var server = app.listen(3141, function(){
  var host = server.address().address;
  var port = server.address().port;

  console.log("Listening at http://%s:%s", host, port);
});