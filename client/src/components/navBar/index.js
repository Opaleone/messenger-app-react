import React from 'react';

const NavBar = () => {
  return (
    <nav id='nav-bar'>
      <h1 id='page-title' className='nav-child'>App Name</h1>
      <input className='search-bar' type='text' placeholder='Search for Friends'></input>
      <img alt='profile' src='' className='nav-child'></img>
    </nav>
  )
}

export default NavBar;