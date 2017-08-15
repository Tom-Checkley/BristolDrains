const express = require('express'),
  router = express.Router(),
  passport = require('passport'),
  jwt = require('jsonwebtoken'),
  config = require('../config/database'),
  multer = require('multer');

const User = require('../models/user');

// Register
router.post('/register', (req, res, next) => {
  let newUser = new User({
    name: req.body.name,
    email: req.body.email,
    username: req.body.username,
    password: req.body.password
  });
  User.addUser(newUser, (err, user) => {
    if (err) {
      res.json({ success: false, msg: 'Failed to register user' });
    } else {
      res.json({ success: true, msg: 'User registered' });
    }
  });
});

// Authenticate
router.get('/authenticate', (req, res, next) => {
  res.send('Authenticate');
});

// admin
router.get('/admin', (req, res, next) => {
  res.send('Admin');
});

// Validate
router.get('/validate', (req, res, next) => {
  res.send('Validate');
});

module.exports = router;