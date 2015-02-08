var mongoose = require('mongoose');
var bcrypt = require('bcrypt');

var UserSchema = new mongoose.Schema({
  username: {
    type: String, 
    required: true, 
    unique: true
  },
  email: {
    type: String, 
    required: true, 
    unique: true
  },
  password: {
    type: String, 
    required: true
  },
  created_at: Date,
  updated_at: Date
});

UserSchema.pre('save', function(next) {
  var user = this;

  // Update created_at and updated_at
  var currentDate = new Date();

  user.updated_at = currentDate;

  if (!user.created_at) {
    user.created_at = currentDate;
  }

  // Salt and hash password
  if (!user.isModified('password')) return next();

  bcrypt.genSalt(10, function(err, salt) {
    if (err) return next(err);

    bcrypt.hash(user.password, salt, function(err, hash) {
      if (err) return next(err);

      user.password = hash;
      next();
    });
  });


  next();
});

// toJSON removes the password when sending back to client
UserSchema.methods.toJSON = function() {
  var user = this.toObject();
  delete user.password;
  return user;
};

module.exports = mongoose.model('User', UserSchema);