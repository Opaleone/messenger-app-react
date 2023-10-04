const router = require('express').Router();
const apiRoutes = require('./api')

const apiRoutingChoice = ['/users', '/users/:id', '/users/:id/friends/:friendId' , '/messages', '/messages/:id/conversation/:friendId', '/messages/:id', '/messages/:id/singleMessage/:friendId']

router.use('/api', apiRoutes);

router.use((req, res) => {
  const randomIdx = Math.floor(Math.random() * apiRoutingChoice.length)

  return res.send(`Try localhost:3001/api${apiRoutingChoice[randomIdx]}`)
})

module.exports = router;