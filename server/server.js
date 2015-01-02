var express = require('express');
var app = express();
var path = require('path');
var logger = require('morgan');

app.use(logger('dev'));

// TO DO: compress static files
// app.use(express.compress());

app.use(express.static(path.join(__dirname, '../public'), {maxAge: '1d'}));

// Enable Angular to get rid of /#/ in url paths
app.all('/*', function(req, res) {
  res.sendFile(path.join(__dirname, '../public/index.html'));
});

var server = app.listen(3141, function(){
  var host = server.address().address;
  var port = server.address().port;

  console.log("Listening at http://%s:%s", host, port);
});
