'use client';
import { useState, useEffect } from 'react';
import MobileNavbar from './MobileNavbar';

const Footer = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <footer className='sticky bottom-0 bg-background py-1'>
      {windowWidth < 1000 && <MobileNavbar />}
    </footer>
  );
};

export default Footer;
