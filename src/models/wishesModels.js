const { Schema } = require('mongoose');
const mongoose = require('mongoose');

const wishesSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  IDUser: {
    type: String,
    required: true,
  }
  
});

const Wishes = mongoose.model('Whies', wishesSchema);

module.exports = Wishes;
