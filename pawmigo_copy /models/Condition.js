const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const conditionSchema = new Schema({
  condition: {
    type: String,
    required: true,
    trim: true
  },
  date: {
    type: Date,
    default: Date.now
  }
});



const Condition= mongoose.model('Condition', conditionSchema);

module.exports = Condition;