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
import ReactModal from 'react-modal'; // Import ReactModal from react-modal
import { CgClose } from 'react-icons/cg';
function App() {
  const [modalIsOpen, setModalIsOpen] = useState(false); // State for modal visibility

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
            onClick={() => {
              openModal(); // Call openModal function when the IoAddCircle icon is clicked
            }}
          />
        </div>
        <ReactModal // Use ReactModal component from react-modal
          isOpen={modalIsOpen}
          onRequestClose={closeModal}
          className="modal-content"
          overlayClassName="modal-overlay"
        >
        
          {/* Modal content */} 
          
       <br/>
       <div className="flex items-center justify-center w-full h-full mb-4">
         <button className='rounded-full p-2 absolute top-3 right-3' onClick={closeModal}>
             <CgClose className='text-black text-xl' />
        </button>

      <div className="text-5xl text-gray-400 " />
        <h1 className='font-bold'> Post</h1>
      </div>
       
           <ImageUploader/>
        </ReactModal>
      </div>
    </>
  );
}

export default App;
