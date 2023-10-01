import React from 'react';
import axios from 'axios';

const users = await axios.get('//localhost:3001/api/users')

console.log(users.data);

const Conversation = () => {
  return (
    <div id='conversation-wrapper'>
      <div id='convo-header'>
        <h2 id='current-conversation-sender'>hello</h2>
      </div>
      <div id='message-display'>
        display
      </div>
      <div id='convo-input'>
        <input id='convo-text-bar' type='text' placeholder='What to say...'></input>
      </div>
    </div>
  )
}

export default Conversation;