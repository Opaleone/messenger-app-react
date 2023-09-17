const db = require('../config/connection')
const message = require('../models/message')

db.on('error', console.error.bind(console, 'MongoDB connection error:'));

const main = async () => {

  const messages = [
    {
      messageContent: 'Something',
      userID: 1029983
    },
    {
      messageContent: 'Something else',
      userID: 2938844
    }
  ]

  await message.insertMany(messages);
  console.log('Messages Added!')

}


(async function () {
  await main();
  db.close()
})();