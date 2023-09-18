const Message = require('../models/message')

const handleNewMessage = async (req, res) => {
  if (!req) res.status(404).send('No message data found!')

  await Message.create(req.body)
}

module.exports = {
  handleNewMessage
}