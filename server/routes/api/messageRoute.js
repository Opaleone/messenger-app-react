const router = require('express').Router();
const { getMessages, createMessage, updateMessage, deleteMessage, getConversation } = require('../../controllers/messageController');

router
  .route('/')
  .get(getMessages)
  .post(createMessage);

router
  .route('/:id')
  .put(updateMessage)
  .delete(deleteMessage);

router
  .route('/:id/conversation/:friendId')
  .get(getConversation);

module.exports = router;