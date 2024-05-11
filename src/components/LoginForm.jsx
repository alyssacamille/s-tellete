// LoginForm.js
import React, { useState } from 'react';
import axios from 'axios';
import '../styles/Form.css'; // Import the CSS file 

const LoginForm = () => {
  const [loginUsernameOrEmail, setLoginUsernameOrEmail] = useState('');
  const [loginPassword, setLoginPassword] = useState('');
  const [loginMessage, setLoginMessage] = useState('');

  const login = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post('http://localhost:5173/Login', {
        email: loginUsernameOrEmail,
        password: loginPassword,
      });
      console.log(response.data.message);
      setLoginMessage(response.data.message);
    } catch (error) {
      console.error('Error:', error.response.data.error);
      setLoginMessage(error.response.data.error);
    }
  };

  return (
    <form className="mx-auto rounded-xl form-content" method="post" onSubmit={login}>
    <input
        type="text"
        name="email"
        placeholder="Username or email"
        value={loginUsernameOrEmail}
        onChange={(e) => setLoginUsernameOrEmail(e.target.value)}
    />
    <input
        type="password"
        name="password"
        placeholder="Password"
        value={loginPassword}
        onChange={(e) => setLoginPassword(e.target.value)}
    />
    <button type="submit">Log in</button>
    <div>{loginMessage}</div>
    </form>
  );
};

export default LoginForm;
