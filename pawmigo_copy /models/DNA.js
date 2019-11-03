const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const DNASchema = new Schema({
  breedComposition: {
    type: String,
    required: true,
    trim: true
  },
  exerciseInducedCollapse: {
    type: String,
    required: true,
    trim: true
  },
  DegenerativeMyelopathy: {
    type: String,
    required: true,
    trim: true
  }
});



const DNA = mongoose.model('DNA', DNASchema);

module.exports = DNA;