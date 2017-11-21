const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const commentSchema = new Schema({
  _userId: Schema.Types.ObjectId,
  comment: String,
  _parentCommentId: Schema.Types.ObjectId
},
{ timestamps: true });

const eventSchema = new Schema({
  name: { type: String, required: [true, 'event name is required'] },
  description: String,
  dateTime: Date,
  venue: String,
  posterImage: String,
  artists: [String],
  mediaLinks: [String],
  discussion: [commentSchema]
},
{ timestamps: true });

module.exports = mongoose.model('Event', eventSchema);
