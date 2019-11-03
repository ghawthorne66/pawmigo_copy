const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const CalendarEventSchema = new Schema({
  inviteeName: {
    type: String,
    required: true
  },
  dateTime: {
    type: String,
    required: true,
    trim: true
  },
  email: {
    type: String,
    required: true,
    trim: true,
    lowercase: true,
  },
  createdAt: {
    type: Date,
    default: Date.now
  },
  eventType: {
    type: String,
    required: true,
  }

})


const CalendarEvent = mongoose.model('CalendarEvent', CalendarEventSchema);

module.exports = CalendarEvent;