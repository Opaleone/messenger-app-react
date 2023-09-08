import React from 'react'

const conversations = [
  {
    sender: 'Aaron Sanchez',
    lastMessage: 'Yo!! Where you been?'
  },
  {
    sender: 'Fred Serrano',
    lastMessage: "I've just been working duwag"
  },
  {
    sender: 'Mom',
    lastMessage: "Look at this picture I just saw"
  },
  {
    sender: 'Pablo Sotelo',
    lastMessage: "Can I send you the venmo for this ammo?"
  },
  {
    sender: 'Helena',
    lastMessage: "Look at Cinco!!"
  }
]

const ConversationList = () => {
  return (
    <ul id='conversation-list'>
      {conversations.map((convo) => {
      return <li className='convo-list-item'>
        <p className='sender'>{convo.sender}</p>
        <p className='last-message'>{convo.lastMessage}</p>
      </li>
    })}
    </ul>
  )
}

export default ConversationList;