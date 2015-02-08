var express    = require('express');
var app        = express();

var path       = require('path');
var logger     = require('morgan');
var favicon    = require('serve-favicon');
var bodyParser = require('body-parser'); 

var mongoose   = require('mongoose');
var User       = require('./models/User');
var jwt        = require('jwt-simple');
var config     = require('./services/config');

// Log requests to terminal
app.use(logger('dev'));

// Parse urlencoded bodies and json
// so we can grab information from POST requests
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

// Serve static files and favicon
app.use(express.static(path.join(__dirname, '../public'), {maxAge: '1d'}));
app.use(favicon(path.join(__dirname, '../public/assets/images/favicon.ico')));


// Write routes for user auth
var userRouter = express.Router();

userRouter.post('/signup', function(req, res) {
  console.log(req.body);
  var newUser = new User({
    username: req.body.username,
    email: req.body.email,
    password: req.body.password
  });

  newUser.save(function(err) {
    if (err) return res.status(500).send({message: err});

    createSendToken(newUser, res);
  });
});

userRouter.post('/login', function(req, res) {
  req.user = req.body;

  console.log(req.user);

  User.findOne({username: req.user.username}, function(err, user) {
    if (err) throw err;

    if (!user)
      return res.status(401).send({message: 'Wrong username or password.'});

    user.comparePasswords(req.user.password, function(err, isMatch) {
      if (err) throw err;

      if (!isMatch)
        return res.status(401).send({message: 'Wrong username or password.'});

      createSendToken(user, res);
    });
  });
});

function createSendToken(user, res) {
  // Create JWT payload
  var payload = {
    sub: user.id
  };

  var token = jwt.encode(payload, config.JWT_SECRET);

  return res.status(200).send({
    user: user.toJSON(),
    token: token
  });  
}

app.use('/api', userRouter);

var notes = [
  {type: 'Question', body: 'What\'s the difference between this and that?'}, 
  {type: 'Grammar', body: 'ich habe, du habst'}, 
  {type: 'Sentence', body: 'Potrei imparare le lingue ogni giorno.'}
];

app.get('/notes', function(req, res) {
  if (!req.headers.authorization)
    return res.status(401).send({message: 'You are not authorized'});

  var token = req.headers.authorization.split(' ')[1];
  var payload = jwt.decode(token, config.JWT_SECRET); 

  if(!payload.sub)
    return res.status(401).send({message: 'Authentication failed.'});
  
  res.json(notes);
});

// Enable Angular to get rid of /#/ in url paths
app.all('/*', function(req, res) {
  res.sendFile(path.join(__dirname, '../public/index.html'));
});

// Connect to mongoDB database hosted on MongoLabs
mongoose.connect('mongodb://langtrack:langtrack@ds045679.mongolab.com:45679/language-tracker');

var server = app.listen(3141, function(){
  var port = server.address().port;
  console.log("Listening at http://localhost:%s", port);
});
