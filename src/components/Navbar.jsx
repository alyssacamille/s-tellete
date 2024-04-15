import React, { useState, useEffect } from 'react';
import Logo from './Logo';
import Search from './Search';
import Header from './Header';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.pageYOffset;
      if (scrollTop > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <nav className={` top-round bg-white sticky top-0 max-w-[36em] z-50 duration-500 ${isScrolled ? '' : ' sticky top-0 bg-white shadow-lg'}`}> 
      {isScrolled ? 
      (
        <div className=' p-5 justify-between flex'>
            <Logo /> 
            <Search/>
            
        </div>
      ): 
      (
        <Header/>
      )
      }
    </nav>
  );
  
};

export default Navbar;
