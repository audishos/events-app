const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const attendeeSchema = new Schema({
  _userId: { type: Schema.Types.ObjectId, required: true },
  _eventId: { type: Schema.Types.ObjectId, required: true },
  isGoing: Boolean,
  isAdmin: Boolean
},
{ timestamps: true });

module.exports = mongoose.model('Attendee', attendeeSchema);
