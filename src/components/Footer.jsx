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
        <div className= ' p-5 flex items-center text-black '>
        <img className=' w-10 h-10 object-cover object-contain rounded-full object-contain' src="s" alt='PFP Image'/>
         <h1 className=' card-small text-left font-bold'>"{}"</h1>
         <button className='rounded-full p-2 absolute top-3 right-3' onClick={closeModal}>
             <CgClose className='text-black text-xl' />
        </button>

        </div>
        {/* Image div */}
       

        <div  className='fixed relative object-contain '> 
        
          <img className='  object-contain ' src="{}" alt='Product Image'/>
          {/* <FaCircleChevronLeft className=' text-stone-600 absolute text-[2rem] -left-3 top-1/2' />
          <FaCircleChevronRight className=' text-stone-600 absolute text-[2rem] -right-3 top-1/2' /> */}
          {/* replace with dots carosel */}
        </div>

        <div className=' m-5 flex text-black justify-between overflow-auto'>
         
          <div className=''>
            <h1 className='text-lg font-semibold'>"{}"</h1>
            <p>from "{}"</p>
          </div>
          {/* Right part of card */}
          <div className=' text-black flex items-center justify-between gap-2 '>
           
                  <button className=' bg-neutral-200 card-small rounded-full'>Request</button> 
           
            <button className='bg-neutral-200 card card-small rounded-full'>
            
            </button>
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