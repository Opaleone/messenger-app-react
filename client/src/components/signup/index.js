import axios from 'axios';
import { useState } from 'react';

export default function Signup(){
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  async function handleSubmit() {
    await axios.post('//localhost:3001/api/users/', {
      firstName: firstName,
      lastName: lastName,
      userName: username,
      email: email,
      password: password
    })
  }

  return (
    <div className='register-page'>
      <form 
        className='form-container'
        onSubmit={handleSubmit}>
        <input 
          className='form-input'
          type='text' 
          placeholder='First Name'
          value={firstName}
          onChange={e => setFirstName(e.target.value)}
          />
        <input 
        className='form-input'
        type='text' 
        placeholder='Last Name (optional)'
        value={lastName}
        onChange={e => setLastName(e.target.value)}
        />
        <input 
        className='form-input'
        type='text' 
        placeholder='Email'
        value={email}
        onChange={e => setEmail(e.target.value)}
        />
        <input 
        className='form-input'
        type='text' 
        placeholder='Username'
        value={username}
        onChange={e => setUsername(e.target.value)}
        />
        <input 
          className='form-input'
          type='password' 
          placeholder='Password'
          value={password}
          onChange={e => setPassword(e.target.value)}
          />

        <button
          className='form-button'
          type='submit'
        >Sign Up!</button>
      </form>
    </div>
  )
}
