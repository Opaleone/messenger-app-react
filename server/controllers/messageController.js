const { ObjectId } = require('mongoose');
const Message = require('../models/Message')

module.exports = {
  getMessages: async (req, res) => {
    try {
      const allMessages = await Message.find();

      if (!allMessages) {
        res.status(404).json({ message: 'No messages found!'});
      }

      res.status(200).json(allMessages)
    } catch (err) {
      res.status(500).json(err.message);
    }
  },

  createMessage: async (req, res) => {
    try {
      const newMessage = await Message.create(req.body);

      if (!newMessage) {
        res.status(404).json({ message: 'Must have content for new message!'})
      }

      res.status(201).json(newMessage);
    } catch (err) {
      res.status(500).json(err.message);
    }
  },

  updateMessage: async (req, res) => {
    try {
      const updateMessage = await Message.findOneAndUpdate(
        { _id: req.params.id },
        { $set: req.body },
        { runValidators: true, new: true }
      )

      if (!updateMessage) {
        res.status(404).json({ message: 'Must include data to message update'})
      }

      res.status(200).json({ message: `${req.params.id} updated!`})
    } catch (err) {
      res.status(500).json(err.message);
    }
  },

  deleteMessage: async (req, res) => {
    try {
      const deleteThought = await Message.findOneAndDelete({ _id: req.params.id });

      if (!req.params.id) {
        res.status(404).json({ message: 'Must include id for thought selection'})
      }

      res.status(200).json({ message: `${req.params.id} deleted!`})
    } catch (err) {
      res.status(500).json(err.message);
    }
  },

  getConversation: async (req, res) => {
    try {
      const message = await Message
        .find({
          from: req.params.id, to: req.params.friendId 
        })
        .sort({
          createdAt: -1
        })

      res.status(200).json(message);
    } catch (err) {
      res.status(500).json(err.message);
    }
  }
}