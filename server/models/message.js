const { Schema, default: mongoose } = require('mongoose');

const messageSchema = new Schema(
  {
    messageContent: { 
      type: String, 
      required: true 
    },
    user: { 
      type: Schema.Types.ObjectId, 
      ref: 'User',
      required: true
    },
  },
  {
    timestamps: true
  }
)

const Message = mongoose.model('Message', messageSchema);

module.exports = Message;