//////////////////////////////////////////////////
// 
// PUBLIC ROUTES FOR NON AUTHORIZED REQUESTS
// 
//////////////////////////////////////////////////

const User = require('../models/user');
const Testimonial = require('../models/testimonials');
const Blog = require('../models/blog');
const config = require('../config/database');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

mongoose.Promise = global.Promise;

module.exports = (router) => {

  /**********************************
    NON AUTHORIZED BLOG ROUTES
  ***********************************/

  // BLOG GET REQUEST
  router.get('/allBlogs', (req, res) => {
    Blog.find({}, (err, blogs) => {
      if (err) {
        res.json({ success: false, message: err });
      } else if (!blogs) {
        res.json({ success: false, message: 'No blog posts found' });
      } else {
        res.json({ success: true, blogs });
      }
    }).sort({ '_id': -1 });
  });


  /**********************************
    NON AUTHORIZED TESTIMONIAL ROUTES
  ***********************************/
  router.post('/newTestimonial', (req, res) => {
    let testimonial;
    if (!req.body.location) {
      res.json({ success: false, message: 'location must be provided' });
    } else if (!req.body.author) {
      res.json({ success: false, message: 'author must be provided' });
    } else if (!req.body.body) {
      res.json({ success: false, message: 'body must be provided' });
    } else {
      testimonial = new Testimonial({
        location: req.body.location,
        author: req.body.author,
        body: req.body.body
      });
    }
    testimonial.save((err) => {
      if (err) {
        console.log(err);
        res.json({ success: false, message: err });
      } else {
        res.json({ success: true, message: 'testimonial saved' });
      }
    });
  });

  return router;
};