const User = require('../models/User');
const jwt = require('jsonwebtoken');

const maxAge = 1*24*60*60;

const createToken = (id) => {
  return jwt.sign({ id }, process.env.SECRET, {
    expiresIn: maxAge,
  });
};

module.exports.signup = async (req, res, next) => {
  try {
    const {email, password} = req.body;
    const user = await User.create({email, password});
    const token = createToken(User._id);

    res.cookie('jwt', token, {
      withCredentials: true,
      httpOnly: false,
      maxAge: maxAge * 1000
    });

    res.status(201).json({user: user._id, created: true})
  } catch (e) {
    console.log(e.message)
  }
}

module.exports.login = async (req, res, next) => {};