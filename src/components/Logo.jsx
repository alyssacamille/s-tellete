import React from 'react'
// import './Logo.css'
import LogoImage from '../assets/satellite-logo.svg'

export default function Logo() {
  // XD why are there 2 divs with no css or existence wrapping up an image 😂😂
  return (
    <div>
      <div >
        <img className='satellite-logo' src={LogoImage} alt="Satellite Logo"  />
      </div>
    </div>
  )
}
// js on html variables {name}