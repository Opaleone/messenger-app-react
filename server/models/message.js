const { Schema, default: mongoose } = require('mongoose');

const messageSchema = new Schema(
  {
    messageContent: { 
      type: String, 
      required: [true, 'Message must contain content!'] 
    },
    to: {
      type: Schema.Types.ObjectId,
      ref: 'User',
      required: [true, 'Must include a receiver!']
    },
    from: {
      type: Schema.Types.ObjectId,
      ref: 'User',
      required: [true, 'Must include a sender!']
    },
  },
  {
    timestamps: true
  }
)

const Message = mongoose.model('Message', messageSchema);

module.exports = Message;