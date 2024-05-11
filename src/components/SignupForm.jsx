// SignupForm.js
import React, { useState } from 'react';
import axios from 'axios';
import '../styles/Form.css'; // Import the CSS file 

const SignupForm = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [dateOfBirth, setDateOfBirth] = useState('');
  const [signupMessage, setSignupMessage] = useState('');

  const validateSignUp = async (event) => {
    event.preventDefault();
    try {
      const formData = new FormData(event.target);
      const response = await axios.post('http://localhost:5173/Register', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      console.log('Response data:', response.data);
      setSignupMessage(response.data.message);
    } catch (error) {
      console.error('Error:', error);
      setSignupMessage(error.response.data.error || 'An unknown error occurred');
    }
  };

  return (
    <form className='mx-auto rounded-xl form-content' method="post" onSubmit={validateSignUp}>
      <input
        type="text"
        name="username"
        placeholder="Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <input
        type="date"
        name="dateOfBirth"
        placeholder="Birth Date (mm/dd/yyyy)"
        value={dateOfBirth}
        onChange={(e) => setDateOfBirth(e.target.value)}
      />
      <input
        type="email"
        name="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="password"
        name="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button type="submit">Sign Up</button>
      <div>{signupMessage}</div>
    </form>
  );
};

export default SignupForm;
