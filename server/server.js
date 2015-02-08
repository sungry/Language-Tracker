var express    = require('express');
var app        = express();
var path       = require('path');
var logger     = require('morgan');
var favicon    = require('serve-favicon');
var bodyParser = require('body-parser'); 

// Connect to mongoDB on MongoLabs
var mongoose   = require('mongoose');
mongoose.connect('mongodb://langtrack:langtrack@ds045679.mongolab.com:45679/language-tracker');

// Log requests to terminal
app.use(logger('dev'));

// TO DO: compress static files
// app.use(express.compress());

// Parse urlencoded bodies and json
// so we can grab information from POST requests
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

// Serve static files and favicon
app.use(express.static(path.join(__dirname, '../public'), {maxAge: '1d'}));
app.use(favicon(path.join(__dirname, '../public/assets/images/favicon.ico')));


// Write routes for user auth
var userRouter = express.Router();

userRouter.post('/signup', function(req, resp) {
  console.log('Processing signup...')
  resp.send('success');
});

app.use('/api', userRouter);






// Enable Angular to get rid of /#/ in url paths
app.all('/*', function(req, res) {
  res.sendFile(path.join(__dirname, '../public/index.html'));
});


var server = app.listen(3141, function(){
  var host = server.address().address;
  var port = server.address().port;

  console.log("Listening at http://%s:%s", host, port);
});
