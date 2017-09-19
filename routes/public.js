//////////////////////////////////////////////////
// 
// PUBLIC ROUTES FOR NON AUTHORIZED REQUESTS
// 
//////////////////////////////////////////////////

const User = require('../models/user');
const Blog = require('../models/blog');
const config = require('../config/database');



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


  return router;
};