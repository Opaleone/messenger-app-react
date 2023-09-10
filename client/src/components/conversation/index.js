import React from 'react';

let messages = [
  {
    sender: 'Aaron Sanchez',
    messageList: [
      {
        messageContent: 'Yo we playin soccer tomorrow??',
        userId: 'Aaron'
      },
      {
        messageContent: "I'm trying to get COOKED",
        userId: 'Aaron'
      },
      {
        messageContent: "What time??",
        userId: 'Leone'
      },
      {
        messageContent: "7 pm",
        userId: 'Aaron'
      },
      {
        messageContent: "SHEEEESH yuhhh I be out there",
        userId: 'Leone'
      },
      {
        messageContent: "BET THAT",
        userId: 'Aaron'
      }
    ],
    userId: 'Aaron'
  }
]

const Conversation = () => {
  return (
    <div id='conversation-wrapper'>
      <div id='convo-header'>
        <h2 id='current-conversation-sender'>{messages[0].sender}</h2>
      </div>
      <div id='message-display'>
        {messages[0].messageList.map((message) => {
          if (message.userId === messages[0].userId) {
            return <p className='individual-message left'>
            {message.messageContent}
          </p>
          } else {
            return <p className='individual-message right'>
            {message.messageContent}
          </p>
          }
        })}
      </div>
      <div id='convo-input'>
        <input id='convo-text-bar' type='text'></input>
      </div>
    </div>
  )
}

export default Conversation;