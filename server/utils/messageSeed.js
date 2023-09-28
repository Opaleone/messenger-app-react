const connection = require('../config/connection');
const { User, Message } = require('../models');
const Chance = require('chance');

const chance = new Chance();

connection.on('error', (err) => err);

connection.once('open', async () => {
  console.log('__CONNECTED!__')

  const users = await User.find();
  const messages = [];

  for (let i = 0; i < users.length; i++) {
    const randomMessage = chance.sentence();
    let randomRecieverIdx = Math.floor(Math.random() * users.length);

    if (users[randomRecieverIdx].firstName === users[i].firstName) {
      randomRecieverIdx = Math.floor(Math.random() * users.length);
    }

    const message = {
      messageContent: randomMessage,
      to: `${users[randomRecieverIdx]._id}`,
      from: `${users[i]._id}`
    }

    messages.push(message);
  }

  await Message.insertMany(messages);

  console.log(users[0]);
  console.log(users[0]._id);
  console.log(users[0].firstName);

  console.log(messages);
  process.exit(0);
})