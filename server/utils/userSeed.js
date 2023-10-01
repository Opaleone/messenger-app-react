const connection = require('../config/connection');
const { User } = require('../models');
const getRandomName = require('./data');

// console.log(getRandomName());
connection.on('error', (err) => err);

connection.once('open', async () => {
  console.log('connected');

  const users = [];
  const messages = [];

  for (let i = 0; i < 200; i++) {
    const fullName = getRandomName();
    const first = fullName.split(' ')[0];
    const last = fullName.split(' ')[1];

    let usernameGen = []
    let password = '';

    const emailCarriers = ['@gmail.com', '@hotmail.com', '@outlook.com', '@yahoo.com']

    const generateUsername = () => {

      let firstPart = first.split('')[0]

      let randomNum = Math.floor(Math.random() * 4000)

      usernameGen.push(firstPart)
      usernameGen.push(last)
      usernameGen.push(randomNum)
    }

    const generatePassword = (length) => {
      const characters ='ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
      const charactersLength = characters.length;
      for ( let i = 0; i < length; i++ ) {
          password += characters.charAt(Math.floor(Math.random() * charactersLength));
      }
    }

    generateUsername();
    generatePassword(16);

    console.log(password)

    users.push({
      firstName: first,
      lastName: last,
      userName: usernameGen.join('').toLowerCase(),
      email: usernameGen.join('').toLowerCase() + emailCarriers[Math.floor(Math.random() * emailCarriers.length)],
      password: password
    });
  }

  

  await User.insertMany(users);
  console.log(users);
  process.exit(0);
});