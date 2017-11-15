const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const userSchema = new Schema({
  firstName: { type: String, required: [true, 'first name is required'] },
  lastName: { type: String, required: [true, 'last name is required'] },
  email: { type: String, required: [true, 'email name is required'] },
  username: { type: String, required: [true, 'username name is required'] },
  profileImage: String,
  passwordHash: String
},
{ timestamps: true });

module.exports = mongoose.model('User', userSchema);
