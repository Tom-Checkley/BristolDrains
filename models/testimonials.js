const mongoose = require('mongoose');
const config = require('../config/database');

const TestimonialsSchema = mongoose.Schema({
  author: {
    type: String,
    required: true
  },
  location: {
    type: String,
    required: true
  },
  body: {
    type: String,
    required: true
  },
  verified: {
    type: Boolean,
    default: false
  },
  date: {
    type: Date,
    default: Date.now()
  }
});

const Testimonials = module.exports = mongoose.model('Testimonials', TestimonialsSchema);