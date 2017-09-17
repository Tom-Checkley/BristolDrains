const mongoose = require('mongoose');
const bcrypt = require('bcrypt-nodejs');
const config = require('../config/database');

let usernameLength = (username) => {
  if (!username) {
    return false;
  } else if (username.length < 5) {
    return false;
  } else {
    return true;
  }
};


// Validate Username
let validUsername = (username) => {
  if (!username) {
    return false;
  } else {
    const regExp = new RegExp(/^[a-zA-Z0-9]+$/);
    return regExp.test(username);
  }
};
const usernameValidators = [{
  validator: usernameLength,
  message: 'Username must be at least 5 characters long.'
}, {
  validator: validUsername,
  message: 'Username must not have any special characters or spaces'
}];

// Validate Password
let passwordLength = (password) => {
  if (!password) {
    return false;
  } else if (password.length < 8) {
    return false;
  } else {
    return true;
  }
};

let validPassword = (password) => {
  if (!password) {
    return false;
  } else {
    const regExp = new RegExp(/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d!$%@#£€*?&]{8,}$/);
    return regExp.test(password);
  }
};

const passwordValidators = [{
  validator: passwordLength,
  message: 'Password must be at least 8 characters long'
}, {
  validator: validPassword,
  message: 'Password must have no spaces and contain at least one uppercase letter, one lowercase letter and one number'
}];

// User Schema
const userSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
    unique: true
  },
  username: {
    type: String,
    required: true,
    unique: true,
    validate: usernameValidators
  },
  password: {
    type: String,
    required: true,
    validate: passwordValidators
  }
});

// Encrypt Password
userSchema.pre('save', function(next) {
  if (!this.isModified('password')) {
    return next();
  }
  bcrypt.hash(this.password, null, null, (err, hash) => {
    if (err) return next(err);
    this.password = hash;
    next();
  });
});

// Compare Password
userSchema.methods.comparePassword = function(password) {
  return bcrypt.compareSync(password, this.password);
};

const User = module.exports = mongoose.model('User', userSchema);