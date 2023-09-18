const User = require('../models/User')

const handleNewUser = async (req, res) => {
  if (!req) res.status(404).send('No data found!');

  await User.create({
    firstName: req.firstName,
    lastName: req.lastName,
    userName: req.userName,
    email: req.email,
    password: req.password
  });
}

module.exports = {
  handleNewUser
}