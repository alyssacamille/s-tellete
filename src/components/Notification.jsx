import React, { useState } from 'react';
import Modal from 'react-modal';
import Footer from './Footer';  
import Header from './Header';
import Navbar from './Navbar';
import { D1, D2, L1, L2, L3, L4, L5, L6, L7, LR1, LR2, S0, S1,  S10, S11, S12, S13, S14, S15, S16, S2, S3, S4, S5, S6, S7, S8, S9 } from './art';
import { CgClose } from "react-icons/cg";
const activity = {
  data: [
    {
      pfp: L1, 
      username: 'Lulu Cz Arts',
      action: "Confirmed your request Commission for",
      post: 'Chibi YCH',
      time: 'just now',
      art: L2,
    },
    {
      pfp: D2, 
      username: 'dasheru.xz',
      action: "has favourited your post",
      post: 'YCH Commission',
      time: '2 hours ago',
      art: S3,
    },
    {
      pfp: D1, 
      username: 'sakineko_',
      action: "has reacted to your recent post",
      post: 'YCH Commission',
      time: '',
      art: S3,
    },{
      pfp: D1, 
      username: 'sakineko_',
      action: "has reacted to your recent post",
      post: 'YCH Commission',
      time: '',
      art: S3,
    },
    {
      pfp: D1, 
      username: 'sakineko_',
      action: "has reacted to your recent post",
      post: 'YCH Commission',
      time: '',
      art: S3,
    },
    {
      pfp: D1, 
      username: 'sakineko_',
      action: "has reacted to your recent post",
      post: 'YCH Commission',
      time: '',
      art: S3,
    },
    {
      pfp: D1, 
      username: 'sakineko_',
      action: "has reacted to your recent post",
      post: 'YCH Commission',
      time: '',
      art: S3,
    },
    {
      pfp: D1, 
      username: 'sakineko_',
      action: "has reacted to your recent post",
      post: 'YCH Commission',
      time: '',
      art: S3,
    },
    {
      pfp: D1, 
      username: 'sakineko_',
      action: "has ",
      post: 'YCH Commission',
      time: '',
      art: S3,
    },
    {
      pfp: D1, 
      username: 'sakineko_',
      action: "has ",
      post: 'YCH Commission',
      time: '',
      art: S3,
    },
  ]
}


function Notification() {

  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [selectedActivity, setSelectedActivity] = useState(null);



  const openModal = (activity) => {
    setSelectedActivity(activity);
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setSelectedActivity(null);
    setModalIsOpen(false);
  };

  const card = (activity) => {
    return (
      
      <div className='default-round inline-block w-full'>
        <img className='default-round card card-small block w-full' 
        src={activity.pfp} alt='Profile Image' onClick={() => openModal(activity)} />
      </div>


    );
  }

  return (
    <>
       
    {/* <header>
       <p className='  p-10 text-center bg-white text-3xl sticky top-0 bg-white shadow-lg ' 
       style={{ color: 'black' }}>Notifications </p>
     </header> */}
    {/* <Footer/> */}
    {activity.data.map((activityItem, index) => (
  <div className=" inline scrollable-container overflow-auto ">
    {/* Render your notification content here */}
    <div className=" ease-in-out duration-300  p-5 flex items-center text-black gap-2 cursor-pointer default-round  hover:bg-neutral-200 transform-all" onClick={() => openModal(activityItem)}>
  <img className='w-10 h-10 object-cover object-contain rounded-full object-contain'src={activityItem.pfp}alt='pfp'  />

       
       <strong>{activityItem.username}</strong>
             <p>{activityItem.action}</p>
             <strong>{activityItem.post}</strong>
        </div>
    
  </div>
))}

      {/* Modal component */}
     <Modal 
       isOpen={modalIsOpen} 
       onRequestClose={closeModal} 
       className="modal-content"
       overlayClassName="modal-overlay"
        >
      {selectedActivity && (
      <>
 {/*profile */}
        <div className= ' p-5 flex items-center text-black '>
        <img className=' w-10 h-10 object-cover object-contain rounded-full object-contain' src={selectedActivity.pfp} alt='PFP Image'/>
         <h1 className=' card-small text-left font-bold'>{selectedActivity.artist}</h1>
         <button className='rounded-full p-2 absolute top-3 right-3' onClick={closeModal}>
             <CgClose className='text-black text-xl' />
        </button>

        </div>
        {/* Image div */}
       

        <div  className='fixed relative object-contain '> 
        
          <img className='  object-contain ' src={selectedActivity.art} alt='Product Image'/>
          {/* <FaCircleChevronLeft className=' text-stone-600 absolute text-[2rem] -left-3 top-1/2' />
          <FaCircleChevronRight className=' text-stone-600 absolute text-[2rem] -right-3 top-1/2' /> */}
          {/* replace with dots carosel */}
        </div>

        <div className=' m-5 flex text-black justify-between overflow-auto'>
         
          <div className=''>
            <h1 className='text-lg font-semibold'>{selectedActivity.productName}</h1>
            <p>from {selectedActivity.price}</p>
          </div>
          {/* Right part of card */}
          <div className=' text-black flex items-center justify-between gap-2 '>
           
                  <button className=' bg-neutral-200 card-small rounded-full'>Request</button> 
           
            <button className='bg-neutral-200 card card-small rounded-full'>
            
            </button>
          </div>

         </div>

    
    </>
  )}
</Modal>
    </>
   
  );
} 



export default Notification;
