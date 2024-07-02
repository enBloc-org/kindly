'use client';
import MobileNavbar from './navigation/MobileNavbar';
import useMediaQuery from './hooks/useMediaQuery';
import { useConversationContext } from '@/context/conversationContext';

type FooterProps = {
  userId: string;
};

const Footer = ({ userId }: FooterProps) => {
  const isBreakpoint = useMediaQuery(1000);
  const {
    conversationState: { showConversationsList },
  } = useConversationContext();

  return (
    isBreakpoint &&
    showConversationsList && (
      <footer className='fixed bottom-0 h-auto w-full bg-background py-2'>
        <MobileNavbar userId={userId} />
      </footer>
    )
  );
};

export default Footer;
