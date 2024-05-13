// Navbar.jsx
import React, { useState, useEffect } from 'react';
import Logo from './Logo';
import SearchInput from './Search'; // Import SearchInput instead of Search

import Header from './Header';

const Navbar = ({ handleSearch }) => { // Accept handleSearch as a prop
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.pageYOffset;
      setIsScrolled(scrollTop > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <nav className={`top-round bg-white sticky top-0 max-w-[36em] z-50 duration-500 ${isScrolled ? '' : 'sticky top-0 bg-white shadow-lg'}`}>
      {isScrolled ? (
        <div className='p-5 justify-between flex'>
          <Logo />   
          <SearchInput handleSearch={handleSearch} />
           {/* Render the Search component */}
        </div>
      ) : (
        <Header />
      )}
    </nav>
  );
};

export default Navbar;
