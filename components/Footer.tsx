'use client';
import MobileNavbar from './navigation/MobileNavbar';
import useMediaQuery from './hooks/useMediaQuery';
import { useLayout } from '@/context/LayoutContext';

const Footer = () => {
  const isBreakpoint = useMediaQuery(1000);
  const {
    state: { showConversationList },
  } = useLayout();

  return (
    isBreakpoint &&
    showConversationList && (
      <footer className='fixed bottom-0 h-auto w-full bg-background py-2'>
        <MobileNavbar />
      </footer>
    )
  );
};

export default Footer;
