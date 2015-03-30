var jwt     = require('jwt-simple');
var config  = require('./config');

exports.getNotes = function(req, res) {

  if (!req.headers.authorization) {
    return res.status(401).send({message: 'You are not authorized'});
  }

  var token = req.headers.authorization.split(' ')[1];

  var payload = jwt.decode(token, config.JWT_SECRET);

  if (!payload.sub) {
    return res.status(401).send({message: 'Authentication failed.'});
  }

  res.json(notes);
};


// Mock notes
var notes = [
  {type: 'Question', body: 'What\'s the difference between this and that?'},
  {type: 'Grammar', body: 'Ich habe, du habst'},
  {type: 'Sentence', body: 'Potrei imparare le lingue ogni giorno.'},
  {type: 'Research', body: 'Is the 7th tone in Cantonese still spoken?'}
];
