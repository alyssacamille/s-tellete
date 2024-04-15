import React, { useState } from 'react';
import Modal from 'react-modal';
import Footer from './Footer';  
import Header from './Header';
import Navbar from './Navbar';
import { D1, D2, L1, L2, L3, L4, L5, L6, L7, LR1, LR2, S0, S1,  S10, S11, S12, S13, S14, S15, S16, S2, S3, S4, S5, S6, S7, S8, S9 } from './art';
import { CgClose } from "react-icons/cg";
import Search from './Search';
import MessageInput from './Message-Input';
const activity = {
  data: [
    {
      pfp: L1, 
      username: 'Lulu Cz Arts',
      message: "Thank you for commissioning me!",
      post: 'Chibi YCH',
      time: 'just now',
      art: L2,
      
    },

    {
      pfp: LR1, 
      username: 'Lychirin Gallery',
      message: "sorry for the delay,,, ueueue TvT",
      post: 'Chibi YCH',
      time: 'just now',
      art: L2,
      
    }, 
    {
      pfp: D1, 
      username: 'dasheru.xz',
      message: "Just send the payment through ...",
      post: 'Pixel Art',
      time: 'just now',
      art: L2,
      
    },
 
  ]
}

function Notification() {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [selectedActivity, setSelectedActivity] = useState(null);
  const [isScrolled, setIsScrolled] = useState(false);


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

  useEffect(() => {
   const handleScroll = () => {
  const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
  if (scrollTop > 50) {
    setIsScrolled(true);
  } else {
    setIsScrolled(false);
  }
};


    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
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
    <div className="flex flex-out ease-in-out duration-300 p-5 flex items-center text-black gap-2 cursor-pointer default-round hover:bg-neutral-200 transform-all" onClick={() => openModal(activityItem)}>
  <img className='w-10 h-10 object-cover object-contain rounded-full object-contain' src={activityItem.pfp} alt='pfp' />

  <div className="flex flex-col">
    <strong className="block">{activityItem.username}</strong>
    <p className="block">{activityItem.message}</p>
  </div>
</div>

  </div>
))}

      {/* Modal component */}
     <Modal 
      
       isOpen={modalIsOpen} 
       onRequestClose={closeModal} 
       className="modal-content overflow-auto"
       overlayClassName="modal-overlay"
        >
      {selectedActivity && (
      <>
      
 {/*profile */}
 <div className={`sticky top-0 bg-white  `}>

 
  {/* Before Animation (Initial State) */}
  <div className={`p-5 inline-flex space-between gap-10  min-w-[100%] ${isScrolled ? '' : 'top-round '}`}>
    <img className='w-12 h-12 object-cover object-contain rounded-full ' src={selectedActivity.pfp} alt='PFP Image' />
    <h1 className='card-small text-center font-bold '>{selectedActivity.username}</h1>
    <button>
      <CgClose className='text-black self-end block text-xl cursor-pointer ' onClick={closeModal} />
    </button>

    
  </div>

  {/* After Scroll (Scrolled State) */}
  {!isScrolled && (
    <div className='pl-5 pb-5 pr-5 '>
      <Search />
    </div>
  )}
</div>






  <div className=" pb-5 pl-5 pr-1 flex text-black ">
  {/* 1st column: Their profile picture */}
  <div className="items-start">
  <img className="min-w-10 max-h-10 object-cover rounded-full" src={selectedActivity.pfp} alt="Their PFP Image" />
</div>

  {/* 2nd column: Their chat, your chats */}
  <div className="flex flex-col">
  {/* Their chat */}
  <div className="chat-niya gap-2 talk left ml-2 mr-2 mb-2 max-w-[75%] inline-flex justify-start">
    {/* Their message */}
    <p className="p-4 bg-gray-200 default-round">Thank you for commissioning me! I’ll start working on it right away, please look forward to the updates as I need your opinions on them</p>
  </div>
  {/* Your chats */}
  <div className="chat-ko talk right ml-auto flex flex-col max-w-[75%] justify-end">
    <p className="p-4  gap-5 bg-blue-500 default-round text-right m-1 text-white">sankyuu !! i look forward to the art omnomnom</p>
    <p className="p-4  gap-5 bg-blue-500 default-round text-right m-1 text-white">gambatte ✧</p>
    <p className="p-4 gap-5 bg-blue-500 default-round text-right m-1 text-white">very much excite ueeuueueueue</p>
  </div>
</div>



  <div className="flex items-end">
  <img className="min-w-5 max-h-5 object-cover rounded-full align-bottom" src={selectedActivity.pfp} alt="Their PFP Image" />
</div>

</div>


        <div className=' pt-3 pb-5 pl-5 pr-5 text-black w-[100%] overflow-auto sticky bottom-0 bg-white'>
         
          <MessageInput/>
         </div>


    
    </>
  )}
</Modal>
    </>
   
  );
} 

export default Notification;
