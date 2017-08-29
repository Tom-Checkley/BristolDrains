const express = require('express'),
  router = express.Router(),
  passport = require('passport'),
  jwt = require('jsonwebtoken'),
  config = require('../config/database'),
  multer = require('multer'),
  User = require('../models/user');

router.post('/register', (req, res, next) => {
  let newUser = new User({
    name: req.body.name,
    username: req.body.username,
    password: req.body.password,
    code: req.body.code
  });
  User.addUser(newUser, (err, user) => {
    if (err) {
      res.json({ success: false, msg: 'Failed to register new user' });
    } else {
      res.json({ success: true, msg: 'New user registered' });
    }
  });
});

router.get('/authenticate', (req, res, next) => {
  res.send('authenticate');
});

router.get('/admin', (req, res, next) => {
  res.send('admin');
});



module.exports = router;