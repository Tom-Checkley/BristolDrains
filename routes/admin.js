//////////////////////////////////////////////////
// 
// RESTRICTED ROUTES FOR REQUESTS NEEDING AUTH
// 
//////////////////////////////////////////////////


const User = require('../models/user');
const Blog = require('../models/blog');
const jwt = require('jsonwebtoken');
const config = require('../config/database');
const multer = require('multer');
const upload = multer({ dest: '../public/assets/uploads/' });

module.exports = (router) => {

  /**********************************
    AUTHORIZED BLOG ROUTES
  ***********************************/

  // BLOG POST REQUEST
  router.post('/newBlog', upload.single('file'), (req, res, next) => {
    if (!req.body.locationPosted) {
      res.json({ success: false, message: 'Location is required' });
    } else if (!req.body.createdBy) {
      res.json({ success: false, message: 'Blog Author must be provided' });
    } else {
      console.log(req.file);
      const blog = new Blog({
        locationPosted: req.body.locationPosted,
        blogBody: req.body.blogBody,
        file: req.body.file,
        createdBy: req.body.createdBy
      });
      blog.save((err) => {
        if (err) {
          res.json({ success: false, message: err });
        } else {
          res.json({ success: true, message: 'Blog Saved' });
        }
      });
    }
  });


  /**********************************
    AUTHORIZED TESTIMONIAL ROUTES
  ***********************************/



  return router;
};