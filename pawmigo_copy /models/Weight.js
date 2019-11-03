const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const weightSchema = new Schema({
  weight: {
    type: Number,
    required: true
  },
  dateTaken: {
    type: Date,
    default: Date.now
  }
});


const Weight = mongoose.model('Weight', weightSchema);

module.exports = Weight;