const mongoose = require('mongoose');
const { Schema } = require('mongoose');

const userSchema = new Schema({
  googleId: String,
  choice_of_team: String,
});

mongoose.model('users', userSchema);
