const { Schema, default: mongoose } = require('mongoose')

const userSchema = new Schema(
  {
    firstName: { type: String, required: true },
    lastName: String,
    userName: { type: String, required: true },
    email: { type: String, required: true },
    password: { type: String, required: true }
  },
  {
    timestamps: true
  }
)

const User = mongoose.model('User', userSchema)

module.exports = User;