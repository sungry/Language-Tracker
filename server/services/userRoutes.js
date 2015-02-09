var jwt     = require('jwt-simple');
var config  = require('./config');
var User    = require('../models/User');

exports.signup = function(req, res) {
    var newUser = new User({
      username: req.body.username,
      email: req.body.email,
      password: req.body.password
    });

    newUser.save(function(err) {
      if (err) return res.status(500).send({message: err});

      createSendToken(newUser, res);
    });
};

exports.login = function(req, res) {
    req.user = req.body;

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
};

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