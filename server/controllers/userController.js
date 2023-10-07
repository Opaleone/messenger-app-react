const mongoose = require('mongoose');
const ObjectId = mongoose.Types.ObjectId;
const User = require('../models/User')
const bcrypt = require('bcrypt');
const { signToken } = require('../utils/auth');

module.exports = {
  getUsers: async (req, res) => {
    try {
      const allUsers = await User.find();
  
      if (!allUsers) {
        res.status(404).json({ message: 'No users found!'})
      }
  
      res.status(200).json(allUsers);
    } catch (err) {
      res.status(500).json(err.message);
    }
  },

  getSingleUser: async (req, res) => {
    try {
      const singleUser = await User.findOne({ _id: req.params.id });

      if (!singleUser) {
        res.status(404).json({ message: `No User with id: ${req.params.id} found!`});
      }

      res.status(200).json(singleUser);

    } catch (err) {
      res.status(500).json(err.message);
    }
  },

  createUser: async (req, res) => {
    try {
      const newUser = await User.create(req.body);

      if (!newUser) {
        res.status(404).json({ message: 'No user found!'});
      }

      res.status(201).json(newUser);
    } catch (err) {
      res.status(500).json(err.message);
    }
  },

  updateUser: async (req, res) => {
    try {
      const updateUser = await User.findOneAndUpdate(
        { _id: req.params.id },
        { $set: req.body },
        { runValidators: true, new: true }
      )

      if (!updateUser) {
        res.status(404).json({ message: 'No user found!' });
      }

      res.status(200).json({ message: 'Update successful! '});

    } catch (err) {
      res.status(500).json(err.message);
    }
  },

  deleteUser: async (req, res) => {
    try {
      await User.findOneAndRemove({ _id: req.params.id });

      if (!req.params.id) {
        res.status(404).json({ message: 'Must include ID in request URL' })
      }

      res.status(200).json({ message: `${req.params.id} deleted` });
    } catch (err) {
      res.status(500).json(err.message);
    }
  },

  newFriend: async (req, res) => {
    try {
      const updateUser = await User.findOneAndUpdate(
        { _id: req.params.id },
        { $addToSet: {
          friends: new ObjectId(req.params.friendId)
        }},
        { new: true }
      )

      const updateFriends = await User.findOneAndUpdate(
        { _id: req.params.friendId },
        { $addToSet: {
          friends: new ObjectId(req.params.id)
        }},
        { new: true }
      )

      if (!updateUser || !updateFriends) {
        res.status(404).json({ message: `No data found for ${req.params.id}`});
      }

      res.status(201).json({ user: updateUser, friend: updateFriends });
    } catch (err) {
      res.status(500).json(err.message);
    }
  },

  deleteFriend: async (req, res) => {
    try {
      const updateUser = await User.findOneAndUpdate(
        { _id: req.params.id },
        { $pullAll: {
          friends: [ new ObjectId(req.params.friendId) ]
        }},
        { new: true }
      )

      const updateFriends = await User.findOneAndUpdate(
        { _id: req.params.friendId },
        { $pullAll: {
          friends: [ new ObjectId(req.params.id) ]
        }},
        { new: true }
      )

      if (!updateUser || !updateFriends) {
        res.status(404).json({ message: `No data found for ${req.params.id}`});
      }

      res.status(200).json({ message: 'Friend removed'})
    } catch (err) {
      res.status(500).json(err.message);
    }
  },

  login: async (req, res) => {
    try {
      const currentUser = await User.findOne({username: req.params.username});

      // doSomethingHere();

      res.status(200).json({message: 'Login Succesful!'})
    } catch (err) {
      res.status(500).json(err.message);
    }
  }
}