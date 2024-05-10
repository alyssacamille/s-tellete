import React from 'react';
import { useState } from 'react'; // Don't forget to import useState
import '../styles/App.css'
import Header from './Header'
import Search from './Search'
import Feed from './Feed.jsx'
import Footer from './Footer.jsx'
import {D1,D2,L1,L2,L3,L4,L5,L6,L7,LR1,LR2,S0,S1,S10,S11,S12,S13,S14,S15,S16,S2,S3,S4,S5,S6,S7,S8,S9} from './art'
import Navbar from './Navbar.jsx';
import { IoAddCircle } from "react-icons/io5";
import ImageUploader from './Image-Uploader.jsx';


function App() {
// modal


const [modalIsOpen, setModalIsOpen] = useState(false); // State for modal visibility

const openModal = () => {
  setModalIsOpen(true);
};

const closeModal = () => {
  setModalIsOpen(false);
};

const showModal = (title, message) => {
  // Function to create and display the modal
  const modal = document.createElement("div");
  modal.className = "modal";
  modal.innerHTML = `<div class="modal-content">
                        <span class="close" onClick={closeModal}>&times;</span>
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




  const [file, setFile] = useState(null);
  const handleFileChange = (event) => {
    const selectedFile = event.target.files[0];
    setFile(selectedFile);
  };
return (
    <> 

      <Navbar/>
    

      <div className='card card-small '>

      <Feed/> 
      </div>
      <Footer />
      
     <div className='flex justify-end relative right-0 mb-20 mr-0 p-100 z-99'>
      <div className="fixed mx-auto p-8 z-99 bottom-16 items-end">
        <IoAddCircle
          className='cursor-pointer'
          style={{ fontSize: '5rem' }}
          onClick={() => {
            openModal(); // Call openModal function when the IoAddCircle icon is clicked
            showModal("Modal Title", "Modal Message"); // Optionally, call showModal with title and message
          }}
        />
      </div>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        className="modal-content"
        overlayClassName="modal-overlay"
      >
        {/* Modal content */}
      </Modal>
    </div>
    </>
  );

  
}

export default App;
