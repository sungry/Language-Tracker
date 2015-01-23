var express = require('express');
var app = express();
var path = require('path');
var logger = require('morgan');
var favicon = require('serve-favicon');
var mongo = require('mongodb').MongoClient;

app.use(logger('dev'));

mongo.connect('mongodb://localhost:27017/language-tracker', function(err, db) {
  if (err) throw err;
});

// TO DO: compress static files
// app.use(express.compress());

// Serve static files and favicon
app.use(express.static(path.join(__dirname, '../public'), {maxAge: '1d'}));
app.use(favicon(path.join(__dirname, '../public/assets/images/favicon.ico')));

// Enable Angular to get rid of /#/ in url paths
app.all('/*', function(req, res) {
  res.sendFile(path.join(__dirname, '../public/index.html'));
});

var server = app.listen(3141, function(){
  var host = server.address().address;
  var port = server.address().port;

  console.log("Listening at http://%s:%s", host, port);
});
