const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const immunizationSchema = new Schema({
  immunization: {
    type: String,
    required: true,
    trim: true
  },
  receivedAt: {
    type: Date,
    default: Date.now
  }
});



const Immunization = mongoose.model('Immunization', immunizationSchema);

module.exports = Immunization;