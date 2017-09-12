const express = require('express'),
  router = express.Router(),
  passport = require('passport'),
  jwt = require('jsonwebtoken'),
  config = require('../config/database'),
  multer = require('multer'),
  User = require('../models/user'),
  Testimonials = require('../models/testimonials');


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

router.post('/authenticate', (req, res, next) => {
  const username = req.body.username;
  const password = req.body.password;

  User.getUserByUsername(username, (err, user) => {
    if (err) throw err;
    if (!user) {
      return res.json({ success: false, msg: 'User not found' });
    }
    User.comparePassword(password, user.password, (err, isMatch) => {
      if (err) throw err;
      if (isMatch) {
        const token = jwt.sign(user, config.secret, {
          expiresIn: 604800
        });
        res.json({
          success: true,
          token: 'JWT ' + token,
          user: {
            id: user._id,
            name: user.name,
            username: user.username
          }
        });
      } else {
        return res.json({ success: false, msg: 'Wrong password' });
      }
    });
  });
});

router.get('/admin', passport.authenticate('jwt', { session: false }), (req, res, next) => {
  res.json({ user: req.user });
});


// router.post('/testimonials', (req, res, next) => {
//   let today = new Date(),
//     dd = today.getDate(),
//     mm = today.getMonth() + 1,
//     yyyyy = today.getFullYear();
//   if (dd < 10) {
//     dd = '0' + dd;
//   }
//   if (mm == 1) {
//     mm = 'January';
//   } else if (mm == 2) {
//     mm = 'Febuary';
//   } else if (mm == 3) {
//     mm = 'March';
//   } else if (mm == 4) {
//     mm = 'April';
//   } else if (mm == 5) {
//     mm = 'May';
//   } else if (mm == 6) {
//     mm = 'June';
//   } else if (mm == 7) {
//     mm = 'July';
//   } else if (mm == 8) {
//     mm = 'August';
//   } else if (mm == 9) {
//     mm = 'September';
//   } else if (mm == 10) {
//     mm = 'October';
//   } else if (mm == 11) {
//     mm = 'Novemeber';
//   } else if (mm == 12) {
//     mm = 'December';
//   }
//   today = dd + ' ' + mm + ' ' + yyyyy;
//   let newTestimonial = new Testimonials({
//     name: req.body.name,
//     location: req.body.location,
//     message: req.body.message,
//     verified: false,
//     date: today
//   });
//   Testimonials.addTestiomonial(newTestimonial, (err, testimonials) => {
//     if (err) {
//       res.json({ success: false, msg: 'Failed to upload testimonial' });
//     } else {
//       res.json({ success: true, msg: 'Successfully added testimonial' });
//     }
//   });
// });

// router.get('/verifiedTestimonials', (req, res) => {
//   Testimonials.find({ verified: true }, (err, testimonials) => {
//     if (err) throw err;
//     res.json({ testimonials: testimonials });

//   }).sort({ '_id': -1 });
// });

// router.get('/unverifiedTestimonials', (req, res, next) => {
//   Testimonials.find({ verified: false }, (err, testimonial) => {
//     if (err) throw err;
//     res.json({ testimonial: testimonial });

//   }).sort({ '_id': -1 });
// });



module.exports = router;