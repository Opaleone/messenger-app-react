const { Schema, default: mongoose } = require('mongoose')

const userSchema = new Schema(
  {
    name: { type: String, required: true },
    userName: { type: String, required: true },
    email: { type: String, required: true },
    passwordDigest: { type: String, required: true }
  },
  {
    timestamps: true
  }
)

const User = mongoose.model('User', userSchema)

module.exports = User;