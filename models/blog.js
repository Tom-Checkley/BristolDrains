const mongoose = require('mongoose');
mongoose.Promise = global.Promise;
const config = require('../config/database');


// User Schema
const blogSchema = mongoose.Schema({
  locationPosted: {
    type: String,
    required: true
  },
  blogBody: {
    type: String
  },
  imgUrl: {
    type: String
  },
  posted: {
    type: Date,
    default: Date.now()
  },
  createdBy: {
    type: String,
    required: true
  }
});

const User = module.exports = mongoose.model('Blog', blogSchema);