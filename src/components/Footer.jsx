import React, { useState } from 'react';
import { IoNotifications, BiPlanet, TbMailFilled, FaRocket, CgProfile, CgClose } from 'react-icons/all';
import { Link } from 'react-router-dom';
import Modal from 'react-modal';
import Logo from './Logo';

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
      <Link to="/Notifications">
        <IoNotifications className="icon" size={'24'} />
      </Link>

      <Link to={"/"}>
        <BiPlanet size={'24'} />
      </Link>

      <Link to={"/Messages"}>
        <TbMailFilled className="icon" size={'24'}/>
      </Link>

      <Link to={"/Explore"}>
        <FaRocket className="icon" size={'24'}/>
      </Link>

      <CgProfile className="icon" size={'24'} onClick={openModal} />

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
        </div>

        <div className='fixed relative object-contain '>
          {/* Modal content here */}
        </div>
      </Modal>
    </div>
  );
}

export default Footer;
