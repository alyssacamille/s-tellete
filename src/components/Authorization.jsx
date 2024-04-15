import React,{useState} from 'react'
import Footer from './Footer';

export default function Authorization() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loginUsernameOrEmail, setLoginUsernameOrEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");
  const [loginMessage, setLoginMessage] = useState("");
  const [signupMessage, setSignupMessage] = useState("");
  const [passwordError, setPasswordError] = useState("");

  const showForm = (formId) => {
    const forms = document.getElementsByClassName("form-content");
    for (let i = 0; i < forms.length; i++) {
      forms[i].style.display = "none";
    }
    document.getElementById(formId).style.display = "block";
  };

  const validateSignUp = () => {
    if (!username || !email || !password) {
      setSignupMessage("Please fill in all fields.");
      return;
    }
    localStorage.setItem("username", username);
    localStorage.setItem("email", email);
    localStorage.setItem("password", password);
    setSignupMessage(
      "Registration Successful. You are successfully registered!",
    );
  };

  const login = () => {
    const storedUsername = localStorage.getItem("username");
    const storedEmail = localStorage.getItem("email");
    const storedPassword = localStorage.getItem("password");

    if (
      (loginUsernameOrEmail === storedUsername ||
        loginUsernameOrEmail === storedEmail) &&
      loginPassword === storedPassword
    ) {
      setLoginMessage("Login Successful. You are successfully logged in!");
    } else if (
      loginUsernameOrEmail !== storedUsername &&
      loginUsernameOrEmail !== storedEmail
    ) {
      setLoginMessage("Error: Wrong username or email.");
    } else {
      setLoginMessage("Error: Wrong password.");
    }
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
    <div className="form-container bg-gray-200 w-5/6 mx-auto p-6 shadow-lg rounded-xl">
      <div className="form-header">
        <h1 className="text-blue-700">satellite</h1>
        <p className="text-gray-700">Be a satellite, orbit now! 🛰✨</p>
      </div>

      <div className="tabs flex justify-around mb-6 rounded-xl w-full max-w-xs">
        <button
          className="tab flex-1 bg-gray-200 text-black border-none py-2 px-4 cursor-pointer rounded-md font-semibold text-lg"
          onClick={() => showForm("login")}
        >
          Log in
        </button>
        <button
          className="tab flex-1 bg-gray-200 text-black border-none py-2 px-4 cursor-pointer rounded-md font-semibold text-lg"
          onClick={() => showForm("signup")}
        >
          Sign up
        </button>
      </div>

      <div id="login" className="form-content">
        <input
          type="text"
          placeholder="Username or email"
          value={loginUsernameOrEmail}
          onChange={(e) => setLoginUsernameOrEmail(e.target.value)}
          className="py-2 px-4 mb-4 border border-gray-300 rounded-md"
        />
        <input
          type="password"
          placeholder="Password"
          value={loginPassword}
          onChange={(e) => setLoginPassword(e.target.value)}
          className="py-2 px-4 mb-4 border border-gray-300 rounded-md"
        />
        <a href="#" className="text-blue-700 no-underline mb-4">
          Forgot password?
        </a>
        <button
          onClick={login}
          className="bg-blue-700 text-white border-none py-2 px-4 cursor-pointer rounded-md w-5/6"
        >
          Log in
        </button>
        <div id="loginMessage">{loginMessage}</div>{" "}
        {/* Display login message */}
      </div>

      <div id="signup" className="form-content" style={{ display: "none" }}>
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className="py-2 px-4 mb-4 border border-gray-300 rounded-md"
        />
        <input
          type="text"
          placeholder="Birth Date (mm/dd/yyyy)"
          className="py-2 px-4 mb-4 border border-gray-300 rounded-md"
        />
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="py-2 px-4 mb-4 border border-gray-300 rounded-md"
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="py-2 px-4 mb-4 border border-gray-300 rounded-md"
        />
        <span style={{ color: "red" }}>{passwordError}</span>
        <button
          onClick={validateSignUp}
          className="bg-blue-700 text-white border-none py-2 px-4 cursor-pointer rounded-md w-5/6"
        >
          Continue
        </button>
        <div>{signupMessage}</div> {/* Display signup message */}
      </div>
    {/* <Footer/> */}
    </div>
  );
}
