'use client';
import MobileNavbar from './MobileNavbar';
import useMediaQuery from './hooks/useMediaQuery';

const Footer = () => {
  const isBreakpoint = useMediaQuery(1000);

  return (
    <footer className='sticky bottom-0 bg-background py-1'>
      {isBreakpoint && <MobileNavbar />}
    </footer>
  );
};

export default Footer;
