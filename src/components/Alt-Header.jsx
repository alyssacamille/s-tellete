import React from 'react';
import { Link } from 'react-router-dom';

export default function Header() {
  const AltHeader = {
    data: [
      {
        altheader: 'Notifications',
      },
      {
        altheader: 'Worlds',
      },
      {
        altheader: 'Messages',
      },
      {
        altheader: 'Post',
      },
    ],
  };

  return (
    <div className="bg-white p-5">
       <div key={index} className="card">
          <p className="text-left text-3xl" style={{ color: 'black' }}>
          Notifications
          </p>
         
        </div>
     
    </div>
  );
}
