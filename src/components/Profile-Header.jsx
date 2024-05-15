import React, { useState } from 'react';

import { Outlet, Link } from 'react-router-dom'
import Logo from './Logo'
import Search from './Search'
import ImageUploader from './Image-Uploader'
import Default from '../assets/default-pfp.jpg'
import SliderComponent from './Slider'

export default function Header() {
  const [showSnackbar, setShowSnackbar] = useState(false);

  return (
    <div className="sticky bg-white p-5 h-[15em] top-round">
     <Link to="/">
     <Logo />

     </Link>
    
    
    <div className='relative bg-cover gap-20 bg-center h-[15em] flex items-center justify-center'>
      <button
        className='bg-neutral-200 card-small rounded-full'
        onClick={() => setShowSnackbar(true)}
      >
        follow
      </button>
      {/* Snackbar component */}
      {showSnackbar && (
        <div className='fixed bottom-4 left-1/2 transform -translate-x-1/2 bg-gray-900 text-white py-2 px-4 rounded-lg z-50'>
          Snackbar followed!
        </div>
      )}
            <div className="w-20 h-20  rounded-full overflow-hidden">
            
                <img
                    src={Default}
                    alt="Profile Picture"
                    className="border-4 ring-4 ring-gray-500 w-[30em] h-full rounded-full object-cover"
 />
                </div>        
                <button className='bg-neutral-200 card-small rounded-full'>share</button>

        </div>
                <SliderComponent/>
    </div>
  )
}
