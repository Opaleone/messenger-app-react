const router = require('express').Router();
const { getMessages, createMessage, updateMessage, deleteMessage, getConversation, getLatestMessage } = require('../../controllers/messageController');

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

router
  .route('/:id/singleMessage/:friendId')
  .get(getLatestMessage);

module.exports = router;