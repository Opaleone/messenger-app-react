const router = require('express').Router()
const messageRoute = require('./messageRoute')
const userRoute = require('./userRoute')

router.use('/messages', messageRoute)

router.use('/users', userRoute)

module.exports = router