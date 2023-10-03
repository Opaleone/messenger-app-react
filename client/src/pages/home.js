import { useState } from 'react';

import Login from '../components/login'
import Signup from '../components/signup'

export default function Home() {
  const [logOrSign, setLogOrSign] = useState(true);

  return (
    <>
      <div id='home-container'>
        <div id='home-left-side'>
          <h1 id='home-title'>Messenger</h1>
          <p id='home-description'>The next best thing in messaging</p>
        </div>
        <div id='home-right-side'>
          <div id='form-holder'>
            {logOrSign ?
              <>
                <h3 id='login-header'>Login</h3>
                <Login />
                <button id='logOrSignBtn' onClick={() => setLogOrSign(false)}>Not a member?</button>
              </>
              : 
              <>
                <h3 id='login-header'>Signup</h3>
                <Signup />
                <button id='logOrSignBtn' onClick={() => setLogOrSign(true)}>Already a member?</button>
              </>}
          </div>
        </div>
      </div>
    </>
  )
}