const { Schema, default: mongoose } = require('mongoose');

const messageSchema = new Schema(
  {
    messageContent: { type: String, required: true },
    userId: { type: Schema.Types.ObjectId, ref: 'User'},
  },
  {
    timestamps: true
  }
)

const Message = mongoose.model('Message', messageSchema);

module.exports = Message;