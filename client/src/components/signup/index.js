import axios from 'axios';
import { useState } from 'react';

export default function Signup(){
  const [values, setValues] = useState({
    firstName: '',
    lastName: '',
    email: '',
    username: '',
    password: '',
  })

  async function handleSubmit(e) {
    e.preventDefault();
    try {
      await axios.post('//localhost:3001/api/users/', {
        ...values,
      });
    } catch (e) {
      console.log(e.message)
    }
  }

  return (
    <div className='register-page'>
      <form 
        className='form-container'
        onSubmit={(e) => handleSubmit(e)}>
        <input 
          className='form-input'
          type='text' 
          placeholder='First Name'
          value={values.firstName}
          onChange={e => setValues({...values, [e.target.name]: e.target.value})}
          />
        <input 
        className='form-input'
        type='text' 
        placeholder='Last Name (optional)'
        value={values.lastName}
        onChange={e => setValues({...values, [e.target.name]: e.target.value})}
        />
        <input 
        className='form-input'
        type='text' 
        placeholder='Email'
        value={values.email}
        onChange={e => setValues({...values, [e.target.name]: e.target.value})}
        />
        <input 
        className='form-input'
        type='text' 
        placeholder='Username'
        value={values.username}
        onChange={e => setValues({...values, [e.target.name]: e.target.value})}
        />
        <input 
          className='form-input'
          type='password' 
          placeholder='Password'
          value={values.password}
          onChange={e => setValues({...values, [e.target.name]: e.target.value})}
          />

        <button
          className='form-button'
          type='submit'
        >Sign Up!</button>
      </form>
    </div>
  )
}
