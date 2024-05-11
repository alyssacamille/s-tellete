import React from 'react'
import '../styles/Form.css'; // Import the CSS file 
import { IoSearch } from "react-icons/io5";

export default function MessageInput() {
  return (
    <div className=''>
    <div className="">
      <div className="flex  items-center text-center gap-2 justify-center overflow-hidden   w-[100%] default-round p-3 " style={{ background: 'var(--sub-color)'}}>  
    <IoSearch className="align-middle h-6 w-6  " />
    <input className="search-input bg-transparent w-full outline-none" type="text" placeholder="Search" />
  
</div>
</div>
</div>
  )
}
