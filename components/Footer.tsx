'use client';
import MobileNavbar from './navigation/MobileNavbar';
import useMediaQuery from './hooks/useMediaQuery';
import { useLayout } from '@/context/LayoutContext';
import { useRef, useState, useEffect } from 'react';

const Footer = () => {
  const isBreakpoint = useMediaQuery(1000);
  const footerRef = useRef<HTMLElement>(null);
  const {
    dispatch,
    state: { showConversationList },
  } = useLayout();
  const [footerHeight, setFooterHeight] = useState(0);

  useEffect(() => {
    const updateHeight = () => {
      if (footerRef.current) {
        const currentHeight = footerRef.current.offsetHeight;
        if (currentHeight !== footerHeight) {
          setFooterHeight(currentHeight);
          dispatch({ type: 'set_footer_height', height: currentHeight });
        }
      }
    };

    updateHeight();
    window.addEventListener('resize', updateHeight);

    return () => {
      window.removeEventListener('resize', updateHeight);
      dispatch({ type: 'set_footer_height', height: 0 });
    };
  }, []);

  return (
    isBreakpoint &&
    showConversationList && (
      <footer
        className='fixed bottom-0 h-auto w-full bg-background py-2'
        ref={footerRef}
      >
        <MobileNavbar />
      </footer>
    )
  );
};

export default Footer;
