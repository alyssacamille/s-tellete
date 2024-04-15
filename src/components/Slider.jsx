import React, { useState } from 'react';
import Modal from 'react-modal';
import { CgClose } from "react-icons/cg";
import { TbMailFilled } from 'react-icons/tb';
import { FaCircleChevronLeft, FaCircleChevronRight } from "react-icons/fa6";
import { D1, D2 } from './art';
import Notification from './Notification';
const products = {
  data: [
    { productName: 'OMR 1', price: '₱ 250', image: D1, artist: "dasheru.xz" },
    { productName: 'OMR 2', price: '10', image: D2, artist: "dasheru.xz" },
    // Add other product objects
  ],
};



const App = () => {
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
      <div className='default-round inline-block mx-2'>
        <img className='default-round card card-small block w-full' src={product.image} alt='Product Image' onClick={() => openModal(product)} />
      </div>
    );
  };

  return (
    <>
      <div className='carousel-container  overflow-x-auto h-[100%]  bottom-20 whitespace-nowrap'>
        {products.data.map((product, index) => (
          <div key={index} className='carousel-item   inline-block'>{card(product)}</div>
        ))}
      </div>

      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        className="modal-content"
        overlayClassName="modal-overlay"
      >
        {selectedProduct && (
          <>
            {/* Profile */}
            <div className='p-5 flex items-center text-black'>
              <img className='w-10 h-10 object-cover object-contain rounded-full object-contain' src={selectedProduct.image} alt='Product Image' />
              <h1 className='card-small text-left font-bold'>{selectedProduct.artist}</h1>
              <button className='rounded-full p-2 absolute top-3 right-3' onClick={closeModal}>
                <CgClose className='text-black text-xl' />
              </button>
            </div>

            {/* Image div */}
            <div className='fixed relative object-contain '>
              <img className='object-contain' src={selectedProduct.image} alt='Product Image' />
              {/* <FaCircleChevronLeft className='text-stone-600 absolute text-[2rem] -left-3 top-1/2' />
              <FaCircleChevronRight className='text-stone-600 absolute text-[2rem] -right-3 top-1/2' /> */}
              {/* Replace with dots carousel */}
            </div>

            <div className='max-h-90% p-5 flex text-black justify-between overflow-autO'>
              <div className=''>
                <h1 className='text-lg font-semibold'>{selectedProduct.productName}</h1>
                <p>from {selectedProduct.price}</p>
              </div>
              {/* Right part of card */}
              <div className='text-black flex items-center justify-between gap-2 '>
                <button className='bg-neutral-200 card-small rounded-full'>Request</button>
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
};

export default App;
