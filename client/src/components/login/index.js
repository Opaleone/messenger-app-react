import { useState } from "react";
import axios from 'axios';

export default function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  async function handleSubmit(e) {
    e.preventDefault();
    console.log(username);
    console.log(password);

    await axios.post('//localhost:3001/api/users', {
      username: username,
      password: password
    })
  }

  return (
    <>
      <form 
        className="form-container"
        onSubmit={handleSubmit}
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