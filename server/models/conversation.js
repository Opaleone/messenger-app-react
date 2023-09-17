const { Schema, default: mongoose } = require('mongoose')

const conversationSchema = new Schema(
  {
    messages: [messageSchema],
    users: [userSchema]
  },
  {
    timestamps: true,
  }
)

const Conversation = mongoose.model('Conversation', conversationSchema)

module.exports = Conversation;