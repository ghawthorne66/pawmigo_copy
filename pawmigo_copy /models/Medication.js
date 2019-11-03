const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const medicationSchema = new Schema({
  medication: {
    type: String,
    required: true,
    trim: true
  },
  directions: {
    type: String,
    required: true,
    trim: true
  },
  date: {
    type: Date,
    default: Date.now
  }
});



const Medication = mongoose.model('Medication', medicationSchema);

module.exports = Medication;