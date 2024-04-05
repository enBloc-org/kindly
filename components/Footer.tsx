'use client';
import MobileNavbar from './navigation/MobileNavbar';
import useMediaQuery from './hooks/useMediaQuery';

const Footer = () => {
  const isBreakpoint = useMediaQuery(1000);

  return (
    <footer className='fixed bottom-0 w-full bg-background py-2'>
      {isBreakpoint && <MobileNavbar />}
    </footer>
  );
};

export default Footer;
