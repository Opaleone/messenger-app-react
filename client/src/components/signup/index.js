import axios from 'axios';
import { useState } from 'react';

export default function Signup(){
  const [values, setValues] = useState({
    firstName: '',
    lastName: '',
    email: '',
    username: '',
    password: '',
  });

  async function handleSubmit(e) {
    e.preventDefault();
    try {
      const {data} = await axios.post('//localhost:3001/api/users/', {
        ...values,
      });

      if (data) {
        if (data.errors) {
          console.log(data.errors);
        }
      }

      console.log(data);
    } catch (e) {
      console.log(e.message);
    }
  };

  return (
    <div className='register-page'>
      <form 
        className='form-container'
        onSubmit={(e) => handleSubmit(e)}>
        <input 
          className='form-input'
          type='text'
          name='firstName'
          placeholder='First Name'
          onChange={e => setValues({...values, [e.target.name]: e.target.value})}
          />
        <input 
        className='form-input'
        type='text'
        name='lastName'
        placeholder='Last Name (optional)'
        onChange={e => setValues({...values, [e.target.name]: e.target.value})}
        />
        <input 
        className='form-input'
        type='text' 
        name='email'
        placeholder='Email'
        onChange={e => setValues({...values, [e.target.name]: e.target.value})}
        />
        <input 
        className='form-input'
        type='text'
        name='username'
        placeholder='Username'
        onChange={e => setValues({...values, [e.target.name]: e.target.value})}
        />
        <input 
          className='form-input'
          type='password'
          name='password'
          placeholder='Password'
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
