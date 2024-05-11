// Authorization.js
import React, { useState } from 'react';
import LoginForm from './LoginForm';
import SignupForm from './SignupForm';
import '../styles/Form.css'; // Import the CSS file

const Authorization = () => {
  const [activeForm, setActiveForm] = useState('login');
  const showForm = (formId) => {
    setActiveForm(formId);
  };

  return (
    <div className="w-6/6 mx-auto rounded-xl max-w-xs">
      <div className="tabs flex justify-center mb-6 gap-5 rounded-xl max-w-xs">
        <button
          id="tab-login"
          className={`button tab flex-1 text-black border-none py-2 px-4 cursor-pointer rounded-md font-semibold text-lg ${
            activeForm === 'login' ? 'active' : ''
          }`}
          onClick={() => showForm('login')}
        >
          Log in
        </button>
        <button
          id="tab-signup"
          className={`button tab flex-1 text-black border-none py-2 px-4 cursor-pointer rounded-md font-semibold text-lg ${
            activeForm === 'signup' ? 'active' : ''
          }`}
          onClick={() => showForm('signup')}
        >
          Sign up
        </button>
      </div>
      {activeForm === 'login' && <LoginForm />}
      {activeForm === 'signup' && <SignupForm />}
    </div>
  );
};

export default Authorization;
