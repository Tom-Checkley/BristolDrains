const mongoose = require('mongoose');
const config = require('../config/database');

const TestimonialsSchema = mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  location: {
    type: String,
    required: true
  },
  message: {
    type: String,
    required: true
  },
  verified: {
    type: Boolean
  },
  date: {
    type: Date,
    default: Date.now()
  }
});

const Testimonials = module.exports = mongoose.model('Testimonials', TestimonialsSchema);

module.exports.addTestiomonial = function(newTestimonial, callback) {
  newTestimonial.save(callback);
};

// module.exports.getVerifiedTestimonials = function(verified, callback) {

// }