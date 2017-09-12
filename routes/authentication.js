const User = require('../models/user');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

mongoose.Promise = global.Promise;

module.exports = (router) => {

  router.post('/register', (req, res) => {
    if (!req.body.name) {
      res.json({ success: false, message: 'You must provide your name' });
    } else if (!req.body.username) {
      res.json({ success: false, message: 'You must provide a username' });
    } else if (!req.body.password) {
      res.json({ success: false, message: 'You must provide a password' });
    } else if (!req.body.code) {
      res.json({ success: false, message: 'You must provide a valid invitation code' });
    } else {
      let user = new User({
        name: req.body.name,
        username: req.body.username,
        password: req.body.password
      });
      user.save((err) => {
        if (err) {
          if (err.code === 11000) {
            res.json({ success: false, message: 'Name or Username already exist.' });
          } else {
            if (err.errors) {
              if (err.errors.username) {
                res.json({ success: false, message: err.errors.username.message });
              } else {
                if (err.errors.password) {
                  res.json({ success: false, message: err.errors.password.message });
                }
              }
            } else {
              res.json({ success: false, message: 'Could not save user. Error: ' + err });
            }
          }

        } else {
          res.json({ success: true, message: 'Registration successful' });
        }
      });
    }
  });

  return router;
};