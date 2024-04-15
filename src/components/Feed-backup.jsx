// nothing to see here just back up 

import React from 'react';
import { TbMailFilled } from 'react-icons/tb';
import Header from './Header';
import { FaCircleChevronLeft } from "react-icons/fa6";
import { FaCircleChevronRight } from "react-icons/fa6";
import {D1,D2,L1,L2,L3,L4,L5,L6,L7,LR1,LR2,S0,S1,S10,S11,S12,S13,S14,S15,S16,S2,S3,S4,S5,S6,S7,S8,S9} from './artworks'
const products = {
  data: [
    {
      productName: 'Chibi Style',
      price: '₱ 250',
      image: L1,
    },
    {
      productName: 'YCH ',
      price: '10',
      image: L2,
    },
    {
      productName: 'fsa',
      price: '₱ 250',
      image: L3,
    },
  ],
};
function App() {

  // Returns a card for a product
  function card(product) {
    return (

      
      <div className='bg-white rounded-xl p-8 '> 
        
        {/* Image div */}
        <div className='fixed relative object-contain p-5'>
          <img className=' w-11/12 mx-auto rounded-lg' src={product.image} alt='Product Image'/>
          <FaCircleChevronLeft className=' text-stone-600 absolute text-[2rem] -left-3 top-1/2' />
          <FaCircleChevronRight className=' text-stone-600 absolute text-[2rem] -right-3 top-1/2' />
        </div>
        
        {/* Bottom card text starts here | */}
        
        {/* left part of the card */}
        <div className='flex text-black justify-between items-center my-5 '>
          <div>
            <h1 className='text-lg font-semibold'>{product.productName}</h1>
            <p>from {product.price}</p>
          </div>
          {/* Right part of card */}
          <div className='text-white flex items-center justify-center'>
            <button className='rounded-full'>Request</button> 
            <button className='rounded-full'>
            <TbMailFilled color='black' size={24} />
            </button>
          </div>
        </div>
      </div>
    );
  }
  

  return (
    <>
    
      <Header />
      <h2>fasfas</h2>
      <div className='w-[95%] grid grid-cols-2 gap-5 mx-auto'>

        {products.data.map((product) => {
          return card(product);
        })}
      </div>

      {/* <Footer /> */}
    </>
  );
}

export default App;
