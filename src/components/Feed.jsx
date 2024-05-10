import React, { useState } from 'react';
import Modal from 'react-modal';
import { TbMailFilled } from 'react-icons/tb';
import Header from './Header';
import { FaCircleChevronLeft, FaCircleChevronRight } from "react-icons/fa6";
import {D1,D2,L1,L2,L3,L4,L5,L6,L7,LR1,LR2,S0,S1,S10,S11,S12,S13,S14,S15,S16,S2,S3,S4,S5,S6,S7,S8,S9} from './art'
import '../styles/Feed.css'
import { CgClose } from "react-icons/cg";
import Notification from './Notification';

// Function to shuffle an array
const shuffleArray = (array) => {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
};

const products = {
  data: shuffleArray([
    {
      "productName": "OMR 1",
      "price": "₱ 250",
      "image": "D1",
      "artist": "dasheru.xz",
      "toc": " SchedulingAll commissions will be done according to who paid first, unless a rush/priority fee was paid."
    },
    {
      "productName": "OMR 2 ",
      "price": "10",
      "image": "D2",
      "artist": "dasheru.xz",
      "toc": " SchedulingAll commissions will be done according to who paid first, unless a rush/priority fee was paid."
    },
    {
      "productName": "Chibi Style",
      "price": "₱ 250",
      "image": "L1"
    },
    {
      "productName": "YCH ",
      "price": "10",
      "image": "L2"
    },
    {
      "productName": "Fishing",
      "price": "₱ 250",
      "image": "L3"
    },
    {
      "productName": "Spear",
      "price": "₱ 300",
      "image": "L4"
    },
    {
      "productName": "Mask Guy",
      "price": "₱ 375",
      "image": "L5"
    },
    {
      "productName": "Kurapika",
      "price": "₱ 375",
      "image": "L6"
    },
    {
      "productName": "Loli Nurse",
      "price": "₱ 300",
      "image": "L7"
    },
    {
      "productName": "Primogem",
      "price": "10",
      "image": "LR1"
    },
    {
      "productName": "Lowbatt Girl",
      "price": "₱ 400",
      "image": "LR2"
    },
    {
      "productName": "NYAN Pixels",
      "price": "₱ 400",
      "image": "S0"
    },
    {
      "productName": "Space Bunny",
      "price": "₱ 375",
      "image": "S1"
    },
    {
      "productName": "Space Bunny 2",
      "price": "₱ 375",
      "image": "S2"
    },
    {
      "productName": "Space Bunny 3",
      "price": "₱ 375",
      "image": "S3"
    },
    {
      "productName": "Space Bunny 4",
      "price": "₱ 375",
      "image": "S4"
    },
    {
      "productName": "Saki Neko",
      "price": "₱ 375",
      "image": "S5"
    },
    {
      "productName": "Saki Neko 2",
      "price": "₱ 375",
      "image": "S6"
    },
    {
      "productName": "Apex Yaoi",
      "price": "₱ 150",
      "image": "S7"
    },
    {
      "productName": "Saki GL",
      "price": "₱ 175",
      "image": "S8"
    },
    {
      "productName": "Neko Trap",
      "price": "₱ 200",
      "image": "S9"
    },
    {
      "productName": "Yaoi",
      "price": "₱ 275",
      "image": "S10"
    },
    {
      "productName": "Saki GL 2",
      "price": "₱ 250",
      "image": "S11"
    },
    {
      "productName": "Saki Art",
      "price": "₱ 300",
      "image": "S12"
    },
    {
      "productName": "Saki Trap 2",
      "price": "₱ 375",
      "image": "S13"
    },
    {
      "productName": "Saki Neko Gold Eye",
      "price": "₱ 400",
      "image": "S14"
    },
    {
      "productName": "Saki Manga Art",
      "price": "₱ 475",
      "image": "S15"
    },
    {
      "productName": "Saki Ehe!",
      "price": "₱ 500",
      "image": "S16"
    }
    
    // Other product objects
  ]),
};

function App() {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);

  const openModal = (product) => {
    setSelectedProduct(product);
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setSelectedProduct(null);
    setModalIsOpen(false);
  };

  const card = (product) => {

    return (
 
       
      <div className=' default-round inline-block w-full'>
        {/* // <div key={product.productName} > */}
          
            <img className=' default-round card card-small block w-full ' 
            src={product.image} alt='Product Image' onClick={() => openModal(product)} />
         </div>

    );
  };

  return (
    <>
      {/* <Header /> */}
      <div className='columns-2 mx-auto '>
        {products.data.map((product) => card(product))}
      </div>

      {/* Modal */}
      <Modal 
       isOpen={modalIsOpen} 
       onRequestClose={closeModal} 
       className="modal-content"
       overlayClassName="modal-overlay"
        >
      {selectedProduct && (
      <>
 {/*profile */}
        <div className= ' p-5 flex items-center text-black '>
        <img className=' w-10 h-10 object-cover object-contain rounded-full object-contain' src={selectedProduct.image} alt='Product Image'/>
         <h1 className=' card-small text-left font-bold'>{selectedProduct.artist}</h1>
         <button className='rounded-full p-2 absolute top-3 right-3' onClick={closeModal}>
             <CgClose className='text-black text-xl' />
        </button>
       

        </div>
        {/* Image div */}
       

        <div  className='fixed relative object-contain '> 
        
          <img className='  object-contain ' src={selectedProduct.image} alt='Product Image'/>
          {/* <FaCircleChevronLeft className=' text-stone-600 absolute text-[2rem] -left-3 top-1/2' />
          <FaCircleChevronRight className=' text-stone-600 absolute text-[2rem] -right-3 top-1/2' /> */}
          {/* replace with dots carosel */}
        </div>

        <div className='max-h-90% p-5 flex text-black justify-between overflow-autO'>
         
          <div className=''>
            <h1 className='text-lg font-semibold'>{selectedProduct.productName}</h1>
            <p>from {selectedProduct.price}</p>
          </div>
          {/* Right part of card */}
          <div className=' text-black flex items-center justify-between gap-2 '>
           
                  <button className=' bg-neutral-200 card-small rounded-full'>Request</button> 
           
            <button className='bg-neutral-200 card card-small rounded-full'>
            <>
              {/* <Notification/> */}
            </>
             <TbMailFilled style={{ color: 'var(--subcolor)', fontSize: 24 }} />
 
            </button>
          </div>

         </div>

    
    </>
  )}
</Modal>

    </>
  );
}

export default App;
