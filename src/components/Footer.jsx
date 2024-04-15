import React from 'react'
import { FaHome } from "react-icons/fa";
import { IoNotifications } from "react-icons/io5";
import { BiPlanet } from "react-icons/bi";
import { TbMailFilled } from "react-icons/tb";
import { FaRocket } from "react-icons/fa6";
import { CgProfile } from "react-icons/cg";
import { Link } from 'react-router-dom';
import { CgClose } from 'react-icons/cg';
import Modal from 'react-modal';
import Logo from './Logo';

// import notification from "./assets/notification.svg"
// import "./footer.css"
import { useState } from 'react';

// Inline css, internal css, external css

{/* <img className='' src={notification}/>
          
          <img src={notification} style={{ height: "2rem", color:"purple"}}/> */}

const Footer = () => {
  const [isActive, setIsActive] = useState(false);
  // for m odal
  const [modalIsOpen, setModalIsOpen] = useState(false); 

  const openModal = () => {
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };
// for the modal content galing sa auth
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
     window.location.replace('/profile'); } else if (
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
    <div  className='footer py-5 px-3 fixed bottom-0 left-0 right-0 bg-white bottom-round flex justify-between'>
        
        {/* connected to */}
        
        <Link to="/Notifications">
          <IoNotifications className="icon" size={'24'} />
        </Link>

        {/* <IoNotifications className="icon" size={24} onClick={() => openModal(product)} /> */}

      <Link to={"/"} className={`icon ${isActive ? 'active' : ''}`}>
        <BiPlanet size={'24'} />
      </Link>

        <Link to={"/Messages"}>
        <TbMailFilled className="icon" size={'24'}/>
        </Link>
        
        <Link to={"/Explore"}>
        <FaRocket className="icon" size={'24'}/>
        </Link>
{/* 
       
        <CgProfile className="icon" size={'24'}/>
        */}
<>
      {/* Modal Trigger */}
      <CgProfile className="icon" size={'24'} onClick={openModal} />

      {/* Modal */}
      <Modal 
       isOpen={modalIsOpen} 
       onRequestClose={closeModal} 
       className="modal-content"
       overlayClassName="modal-overlay"
        >
      { 
      <>
 {/*profile */}
        <div className= 'm-5'>
        <Logo className="items-start" />
        
        <p>Be a satellite, orbit now! 🛰️✨</p>
        
         <button className='rounded-full p-2 absolute top-3 right-3' onClick={closeModal}>
             <CgClose className='text-black text-xl' />
        </button>

        </div>
        {/* Image div */}
       

        <div  className='fixed relative object-contain '> 
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
   </div>


    
    </>
 }
</Modal>
    </>
    </div>
  )
}

export default Footer