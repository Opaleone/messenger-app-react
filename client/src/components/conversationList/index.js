import React from 'react'

let idx = 0;

const conversations = [
  {
    sender: 'Aaron Sanchez',
    lastMessage: 'BET THAT'
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
  },
  {
    sender: 'Dad',
    lastMessage: 'Found this online, Might be useful to you'
  }, 
  {
    sender: 'Haley',
    lastMessage: 'We got the HOUSE!!'
  }
]

const ConversationList = () => {
  function addSelectedClass(e) {
    if (!e.target.classList.contains('selected')) {
      e.target.classList.add('selected');
    } else {
      e.target.classList.remove('selected');
    }
  }

  return (
    <ul id='conversation-list'>
      {conversations.map((convo) => {
      idx++;
      return <div key={idx} className='item-holder' onClick={addSelectedClass}>
        <li className='convo-list-item'>
          <p className='sender'>{convo.sender}</p>
          <p className='last-message'>{convo.lastMessage}</p>
        </li>
        <div className='bottom-border-line'></div>
      </div>
    })}
    </ul>
  )
}

export default ConversationList;