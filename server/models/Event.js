const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const eventSchema = new Schema({
  name: { type: String, required: true },
  description: String,
  dateTime: Date,
  venue: String,
  posterImage: String,
  artists: [String],
  mediaLinks: [String],
  discussion: [{
    _userId: Schema.Types.ObjectId,
    comment: String,
    _parentCommentId: Schema.Types.ObjectId
  }]
},
{ timestamps: true });

module.exports = mongoose.model('EventModel', eventSchema);
