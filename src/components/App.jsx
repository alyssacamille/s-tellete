import React from 'react';
import { useState } from 'react';
import '../styles/App.css';
import Header from './Header';
import Search from './Search';
import Feed from './Feed.jsx';
import Footer from './Footer.jsx';
import { IoAddCircle } from "react-icons/io5";
import ImageUploader from './Image-Uploader.jsx';
import ReactModal from 'react-modal'; // Import ReactModal
import Navbar from './Navbar.jsx';


function App() {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const openModal = () => {
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
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
            onClick={() => openModal()}
          />
        </div>
        <div className=''>
        <ReactModal // Use ReactModal instead of Modal
          isOpen={modalIsOpen}
          onRequestClose={closeModal}
          className="modal-content p-5  "
          overlayClassName="modal-overlay "
        >
          {/* Modal content */}
          <h2>Post</h2>

        <ImageUploader/>




          
          <p>Modal Message</p>
          <button onClick={closeModal}>Close Modal</button>
        </ReactModal>
        </div>
      </div>
    </>
  );
}

export default App;
