'use client';
import MobileNavbar from './navigation/MobileNavbar';
import useMediaQuery from './hooks/useMediaQuery';
import { useLayout } from '@/context/LayoutContext';
import { useRef, useState, useLayoutEffect } from 'react';

const Footer = () => {
  const isBreakpoint = useMediaQuery(1000);
  const footerRef = useRef<HTMLElement>(null);
  const { dispatch } = useLayout();
  const [footerHeight, setFooterHeight] = useState(0);

  useLayoutEffect(() => {
    const handleResize = () => {
      if (footerRef.current) {
        const currentHeight = footerRef.current.offsetHeight;
        if (currentHeight !== footerHeight) {
          setFooterHeight(currentHeight);
          dispatch({ type: 'SET_FOOTER_HEIGHT', height: currentHeight });
        }
      }
    };

    window.addEventListener('resize', handleResize);

    handleResize();

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <footer
      className='fixed bottom-0 w-full bg-background py-2'
      ref={footerRef}
    >
      {isBreakpoint && <MobileNavbar />}
    </footer>
  );
};

export default Footer;
