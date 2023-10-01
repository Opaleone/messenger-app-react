import React, { useState } from 'react';

export default function NavBar() {
  const [friendSearch, setFriendSearch] = useState('');

  return (
    <nav id='nav-bar'>
      <h1 
        id='page-title' 
        className='nav-child'
        >App Name</h1>
      <input 
        className='search-bar' 
        type='text' 
        placeholder='Search for Friends'
        value={friendSearch}
        onChange={e => setFriendSearch(e.target.value)}
        />
      <img
        alt='profile' 
        src='' 
        className='nav-child'></img>
    </nav>
  )
}