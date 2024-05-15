import React from 'react';
import { useState } from 'react'; // Don't forget to import useState
import '../styles/App.css'
import Header from './Header'
import Search from './Search'
import Feed from './Feed.jsx'
import Footer from './Footer.jsx'
import {D1,D2,L1,L2,L3,L4,L5,L6,L7,LR1,LR2,S0,S1,S10,S11,S12,S13,S14,S15,S16,S2,S3,S4,S5,S6,S7,S8,S9} from './art'
import Navbar from './Navbar.jsx';
import Notification from './Notification.jsx';

function App() {
 
return (
    <> 
<div className="bg-white p-5 top-round sticky top-0">
  <p className='text-center text-3xl card font-bold ' style={{ color: 'black' }}>Notifications</p>
</div>
{/* 
        <Notification/> */}
        <h1 className='text-center  card '> there's nothing in here yet</h1>
      <Footer />
    </>
  );

  
}

export default App;
