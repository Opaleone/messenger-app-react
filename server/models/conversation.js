const { Schema, default: mongoose } = require('mongoose')
const Message = require('./Message')
const User = require('./User')

const conversationSchema = new Schema(
  {
    messages: [Message],
    users: [User]
  },
  {
    timestamps: true,
  }
)

const Conversation = mongoose.model('Conversation', conversationSchema)

module.exports = Conversation;