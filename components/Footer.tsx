'use client';
import MobileNavbar from './navigation/MobileNavbar';
import useMediaQuery from './hooks/useMediaQuery';
import { useConversationContext } from '@/context/conversationContext';

const Footer = () => {
  const isBreakpoint = useMediaQuery(1000);
  const { showConversationsList } = useConversationContext();

  return (
    isBreakpoint &&
    showConversationsList && (
      <footer className='sticky bottom-0 h-auto w-full bg-background py-2'>
        <MobileNavbar />
      </footer>
    )
  );
};

export default Footer;
