import React, {useState} from 'react';
import {useNavigate} from 'react-router-dom'

function Signup({ setCurrentUser }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [password_confirmation, setPasswordConfirmation] = useState("");
  const navigate = useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch("/users", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username,
        password,
        password_confirmation
      }),
    }).then((r) => {
      if (r.ok) {
        r.json().then((user) => setCurrentUser(user));
        navigate("/")
      }
      else {
        r.json().then((error) => alert(error.error))}
    });
  };
  return (
    <form onSubmit={(e) => handleSubmit(e)}>
        <label>Username</label>
        <input
        placeholder="Username"
        type="text"
        id="username"
        autoComplete="off"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        />
        <label>Password</label>
        <input
        placeholder="Password"
        type="password"
        id="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        />
        <label>Password Confirmation</label>
        <input
        className="login-text"
        placeholder="Password Confirmation"
        type="password"
        id="password_confirmation"
        value={password_confirmation}
        onChange={(e) => setPasswordConfirmation(e.target.value)}
        />
        <button type="submit">Sign Up</button>
    </form>
  );
}

export default Signup;