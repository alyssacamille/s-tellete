import React from 'react'
import { Outlet, Link } from 'react-router-dom'
import Logo from './Logo'
import Search from './Search'
import ImageUploader from './Image-Uploader'
import Default from '../assets/default-pfp.jpg'
import SliderComponent from './Slider'


export default function Header() {
  return (
    <div className=" sticky bg-white p-5 h-[15em] top-round ">
    <Logo/> 
        <div className='relative bg-cover gap-20 bg-center h-[15em] flex items-center justify-center'>
            <ImageUploader/>
            <div className="w-20 h-20  rounded-full overflow-hidden">
                <img
                    src={Default}
                    alt="Profile Picture"
                    className="border-4 ring-4 ring-gray-500 w-[30em] h-full rounded-full object-cover"
 />
                </div>
                <ImageUploader/>
        </div>
                <SliderComponent/>
    </div>
  )
}
