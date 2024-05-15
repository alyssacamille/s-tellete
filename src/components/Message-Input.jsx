import React from 'react'
import { IoSend } from "react-icons/io5";
import { IoAttach } from "react-icons/io5";

export default function MessageInput() {
  
  function clickHandler (){
  fetch('http://localhost:3000/Messages',{method:"POST",body:{data:json}} )
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(error => console.error('Error:', error));
  }

  return (
    <div className=''>
    <div className="">
      <div className="flex  items-center text-center gap-2 justify-center overflow-hidden   w-[100%]  rounded-full p-3 " style={{ background: 'var(--sub-color)'}}>  
      <IoAttach className="align-middle h-6 w-6  " />
  <input className="bg-transparent w-full outline-none" type="text" placeholder="Aa " />
  <IoSend onClick={clickHandler} className="align-middle   h-5 w-5 " />
  
  
</div>
</div>
</div>
  )
}
