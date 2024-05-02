'use client';
import MobileNavbar from './navigation/MobileNavbar';
import useMediaQuery from './hooks/useMediaQuery';
import { useLayout } from '@/context/LayoutContext';
import { useRef, useState, useLayoutEffect } from 'react';

const Footer = () => {
  const isBreakpoint = useMediaQuery(1000);
  const footerRef = useRef<HTMLElement>(null);
  const {
    dispatch,
    state: { showConversationList },
  } = useLayout();
  const [footerHeight, setFooterHeight] = useState(0);

  useLayoutEffect(() => {
    const handleResize = () => {
      if (footerRef.current) {
        const currentHeight = footerRef.current.offsetHeight;
        if (currentHeight !== footerHeight) {
          setFooterHeight(currentHeight);
          dispatch({ type: 'set_footer_height', height: currentHeight });
        }
      }
    };

    window.addEventListener('resize', handleResize);

    handleResize();

    return () => window.removeEventListener('resize', handleResize);
  }, [showConversationList, footerHeight, dispatch]);

  return (
    <footer
      className='fixed bottom-0 h-auto w-full bg-background py-2'
      ref={footerRef}
    >
      {isBreakpoint && showConversationList && <MobileNavbar />}
    </footer>
  );
};

export default Footer;
