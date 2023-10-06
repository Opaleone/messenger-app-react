import { useState } from "react";
import axios from 'axios';

export default function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  async function handleSubmit(e) {
    e.preventDefault();
    try {
      await axios.post('//localhost:3001/api/users', {
      username: username,
      password: password
      });
    } catch (e) {
      console.log(e.message);
    }
  }

  return (
    <>
      <form 
        className="form-container"
        onSubmit={(e) => handleSubmit(e)}
        >
        <input
          className="form-input"
          type="text"
          placeholder="Username"
          value={username}
          onChange={e => setUsername(e.target.value)}
        />
        <input
          className="form-input"
          type="password"
          placeholder="Password"
          value={password}
          onChange={e => setPassword(e.target.value)}
        />
        <button
          className="form-button"
          type="submit">Login</button>
      </form>
    </>
  )
}