const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
  Firstname: {
    type: String,
    required: true
  },
  Email: {
    type: String,
    required: true
  },
  Message: {
    type: String,
    required: true
  }
})

const userModel = mongoose.model('user', userSchema)

module.exports = userModel