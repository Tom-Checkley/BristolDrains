const User = require('../models/user');
const Testimonial = require('../models/testimonials');
const jwt = require('jsonwebtoken');
const config = require('../config/database');

module.exports = (router) => {

  router.post('/newTestimonial', (req, res) => {
    if (!req.body.name) {
      res.json({ success: false, message: 'Your name is required' });
    } else {
      if (!req.body.location) {
        res.json({ success: false, message: 'Your location is required' });
      } else {
        if (!req.body.message) {
          res.json({ success: false, message: 'A message is required' });
        } else {
          const testimonial = new Testimonial({
            name: req.body.name,
            location: req.body.location,
            message: req.body.message,
            verified: false
          });
          testimonial.save((err) => {
            if (err) {
              res.json({ success: false, message: err });
            } else {
              res.json({ success: true, message: 'Testimonial saved' })
            }
          });
        }
      }
    }
  });

  return router;
};