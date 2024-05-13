import React,{useState} from 'react'
import axios from 'axios'; // Import Axios
import Footer from './Footer';

export default function Authorization() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [dateOfBirth, setDateOfBirth] = useState("");
  const [password, setPassword] = useState("");
  const [loginUsernameOrEmail, setLoginUsernameOrEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");
  const [loginMessage, setLoginMessage] = useState("");
  const [signupMessage, setSignupMessage] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [activeForm, setActiveForm] = useState("login");

  const showForm = (formId) => {
    const forms = document.getElementsByClassName("form-content");
    for (let i = 0; i < forms.length; i++) {
      forms[i].style.display = "none";
    }
    document.getElementById(formId).style.display = "block";
  
    // Get all tab buttons
    const tabs = document.querySelectorAll(".tab");
    // Remove active class from all tabs
    tabs.forEach((tab) => tab.classList.remove("active"));
    // Add active class to the clicked tab
    document.getElementById(`tab-${formId}`).classList.add("active");
  };
  

  const validateSignUp = (event) => {
    event.preventDefault()
    if (!username || !email || !password) {
      setSignupMessage("Please fill in all fields.");
      return;
    }
    // Make Axios POST request for signup
    axios.post('http://127.0.0.1:5173/', {
      username,
      email,
      dateOfBirth,
      password,
    })
    .then(response => {
      // Handle success
      setSignupMessage("Registration Successful. You are successfully registered!");
    })
    .catch(error => {
      // Handle error
      console.error('Error:', error);
    });
  };

  const login = (event) => {
    event.preventDefault()
    if (!loginUsernameOrEmail || !loginPassword) {
      setLoginMessage("Please fill in all fields.");
      return;
    }
    event.preventDefault()
     // Make Axios POST request for login
     axios.post('http://127.0.0.1:5173/', {
      loginUsernameOrEmail,
      loginPassword,
    })
    .then(response => {
      // Handle success
      setLoginMessage("Login Successful. You are successfully logged in!");
    })
    .catch(error => {
      // Handle error
      console.error('Error:', error);
    });
  };

  const showModal = (title, message) => {
    const modal = document.createElement("div");
    modal.className = "modal";
    modal.innerHTML = `<div class="modal-content">
                          <span class="close">&times;</span>
                          <h2>${title}</h2>
                          <p>${message}</p>
                        </div>`;
    document.body.appendChild(modal);

    const closeButton = modal.querySelector(".close");
    modal.onclick = (event) => {
      if (event.target === modal || event.target === closeButton) {
        modal.remove();
      }
    };
  };

  return (
    <div className="form-container w-5/6 mx-auto rounded-xl">
      <div className="tabs flex justify-around mb-6 rounded-xl w-full max-w-xs">
        <button
          id="tab-login"
          className={`tab flex-1 text-black border-none py-2 px-4 cursor-pointer rounded-md font-semibold text-lg ${
            activeForm === "login" ? "active" : ""
          }`}
          onClick={() => showForm("login")}
        >
          Log in
        </button>
  
        <button
          id="tab-signup"
          className={`tab flex-1 text-black border-none py-2 px-4 cursor-pointer rounded-md font-semibold text-lg ${
            activeForm === "signup" ? "active" : ""
          }`}
          onClick={() => showForm("signup")}
        >
          Sign up
        </button>
      </div>
  
      <form id="login" className="form-content" onSubmit={login}>
        <input
          type="text"
          name="loginUsernameOrEmail"
          placeholder="Username or email"
          value={loginUsernameOrEmail}
          onChange={(e) => setLoginUsernameOrEmail(e.target.value)}
          className="py-2 px-4 mb-4 border border-gray-300 rounded-md"
        />
        <input
          type="password"
          name="loginPassword"
          placeholder="Password"
          value={loginPassword}
          onChange={(e) => setLoginPassword(e.target.value)}
          className="py-2 px-4 mb-4 border border-gray-300 rounded-md"
        />
        <button
          type="submit"
          className="bg-blue-700 text-white border-none py-2 px-4 cursor-pointer rounded-md w-5/6"
        >
          Log in
        </button>
        <div id="loginMessage">{loginMessage}</div>{" "}
        {/* Display login message */}
      </form>
  
      <form
        id="signup"
        className="form-content"
        style={{ display: activeForm === "signup" ? "block" : "none" }}
        onSubmit={validateSignUp}
      >
        <input
          type="text"
          name="username"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className="py-2 px-4 mb-4 border border-gray-300 rounded-md"
        />
        <input
          type="date"
          name="dateOfBirth"
          value={dateOfBirth}
          placeholder="Birth Date (mm/dd/yyyy)"
          onChange={(e) => setDateOfBirth(e.target.value)}
          className="py-2 px-4 mb-4 border border-gray-300 rounded-md"
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="py-2 px-4 mb-4 border border-gray-300 rounded-md"
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="py-2 px-4 mb-4 border border-gray-300 rounded-md"
        />
        <span style={{ color: "red" }}>{passwordError}</span>
        <button
          type="submit"
          className="bg-blue-700 text-white border-none py-2 px-4 cursor-pointer rounded-md w-5/6"
        >
          Continue
        </button>
        <div>{signupMessage}</div>{" "}
        {/* Display signup message */}
      </form>
      {/* <Footer/> */}
    </div>
  );
}
