import React, { useState } from 'react';
import { IoNotifications } from 'react-icons/io5';
import { BiPlanet } from 'react-icons/bi';
import { TbMailFilled } from 'react-icons/tb';
import { FaRocket } from 'react-icons/fa6';
import { CgProfile, CgClose } from 'react-icons/cg';
import { Link } from 'react-router-dom';
import Modal from 'react-modal';
import Logo from './Logo';
import Authorization from './Authorization';
import '../styles/Form.css'

const Footer = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const openModal = () => {
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

  return (
    <div className='footer py-5 px-3 fixed bottom-0 left-0 right-0 bg-white bottom-round flex justify-between'>
      
      
<Link
  to="/Notifications"
  className="icon hover:text-blue-900 transform hover:scale-110 transition duration-100 ease-in-out"
>
  <IoNotifications size={24} />
</Link>

      <Link to={"/"} className="icon hover:text-blue-900 transform hover:scale-110 transition duration-100 ease-in-out"
>
        <BiPlanet size={'24'} />
      </Link>

      <Link to={"/Messages"} className="icon hover:text-blue-900 transform hover:scale-110 transition duration-100 ease-in-out"
>
        <TbMailFilled className="icon hover:text-blue-900 transform hover:scale-110 transition duration-100 ease-in-out" size={'24'}/>
      </Link>

      {/* <Link to={"/Explore"}>
        <FaRocket className="icon" size={'24'}/>
      </Link> */}

      <CgProfile className="icon hover:text-blue-900 transform hover:scale-110 transition duration-100 ease-in-out" size={'24'} onClick={openModal} />

      <Modal 
        isOpen={modalIsOpen} 
        onRequestClose={closeModal} 
        className="modal-content"
        overlayClassName="modal-overlay"
      >
        <div className='m-5'>
          <Logo className="items-start" />
          <p>Be a satellite, orbit now! 🛰️✨</p>
          <button className='rounded-full p-2 absolute top-3 right-3' onClick={closeModal}>
            <CgClose className='text-black text-xl' />
          </button>
          <Authorization/>
        </div>

        <div className='fixed relative object-contain '>
          {/* Modal content here */}
        </div>
      </Modal>
    </div>
  );
}

export default Footer;
