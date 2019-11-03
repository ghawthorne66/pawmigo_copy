const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const petSchema = new Schema({
  name: {
    type: String,
    required: true,
    trim: true
  },
  gender: {
    type: String
  },
  dateOfBirth: {
    type: Date
  },
  age: {
    type: Number
  },
  breed: {
    type: String
  },
  imageURL: {
    type: String
  },
  createdAt: {
    type: Date,
    default: Date.now
  },
  condition: [{
    type: Schema.Types.ObjectId,
    ref: "Condition"
  }],
  weight: [{
    type: Schema.Types.ObjectId,
    ref: "Weight"
  }],
  medication: [{
    type: Schema.Types.ObjectId,
    ref: "Medication"
  }],
  immunization: [{
    type: Schema.Types.ObjectId,
    ref: "immunization"
  }],
  dna: [{
    type: Schema.Types.ObjectId,
    ref: "DNA"
  }],
});


const Pet = mongoose.model('Pet', petSchema);

module.exports = Pet;