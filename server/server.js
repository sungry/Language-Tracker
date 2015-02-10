// Setup
var express    = require('express');
var app        = express();
var path       = require('path');
var logger     = require('morgan');
var favicon    = require('serve-favicon');
var bodyParser = require('body-parser'); 
// Services
var mongoose   = require('mongoose');
var jwt        = require('jwt-simple');
var config     = require('./services/config');
var userRoutes = require('./services/userRoutes');
var notes      = require('./services/notes');

// Log requests to terminal
app.use(logger('dev'));

// Parse urlencoded bodies and json
// so we can grab information from POST requests
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

// Serve static files and favicon
app.use(express.static(path.join(__dirname, '../public'), {maxAge: '1d'}));
app.use(favicon(path.join(__dirname, '../public/assets/images/favicon.ico')));

app.post('/signup', userRoutes.signup);
app.post('/login', userRoutes.login);

app.get('/notes', notes.getNotes);

// Enable Angular to get rid of /#/ in url paths
app.all('/*', function(req, res) {
  res.sendFile(path.join(__dirname, '../public/index.html'));
});

// Connect to mongoDB database hosted on MongoLabs
mongoose.connect(config.db);
mongoose.connection.on('open', function(){
  console.log('Connected to MongoDB');
});

var server = app.listen(3141, function(){
  var port = server.address().port;
  console.log("Listening at http://localhost:%s", port);
});
