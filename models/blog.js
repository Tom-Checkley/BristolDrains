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
  file: {
    type: {}
  },
  posted: {
    type: Date,
    default: new Date()
  },
  createdBy: {
    type: String,
    required: true
  }
});

const User = module.exports = mongoose.model('Blog', blogSchema);