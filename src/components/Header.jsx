import React from 'react'
import { Outlet, Link } from 'react-router-dom'
import Logo from './Logo'
import Search from './Search'

export default function Header() {
  return (
    <div className=" sticky bg-white p-5  top-round ">
    <Logo/> 
    <p className='text-left text-3xl card' style={{ color: 'black' }}>Be a satellite, orbit now! 🛰️✨</p>
      <Search/>
    </div>
  )
}
