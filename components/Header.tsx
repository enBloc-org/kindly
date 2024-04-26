'use client';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import useMediaQuery from './hooks/useMediaQuery';
import { useLayoutEffect, useRef, useState } from 'react';

// Components
import { useLayout } from '@/context/LayoutContext';
import DesktopNav from './navigation/DesktopNav';
import NavigationLinkContainer from './navigation/NavigationLinkContainer';
import ProfileRouteIcon from './icons/navigation/ProfileRouteIcon';

export default function Header() {
  const isBreakpoint = useMediaQuery(1000);
  const pathname = usePathname();
  const headerRef = useRef<HTMLHeadingElement>(null);
  const { dispatch } = useLayout();
  const [headerHeight, setHeaderHeight] = useState(0);

  useLayoutEffect(() => {
    const handleResize = () => {
      if (headerRef.current) {
        const currentHeight = headerRef.current.offsetHeight;
        if (currentHeight !== headerHeight) {
          setHeaderHeight(currentHeight);
          dispatch({ type: 'SET_HEADER_HEIGHT', height: currentHeight });
        }
      }
    };

    window.addEventListener('resize', handleResize);

    handleResize();

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <header
      className='min-h-30 sticky top-0 z-10 flex items-center justify-between bg-background px-4 py-2 shadow-sm'
      ref={headerRef}
    >
      <div className='flex items-center'>
        <Link href='/home-page' aria-label='Home page'>
          <Image
            src='/KINDLY_LOGO.png'
            alt='Kindly Logo'
            height={70}
            width={110}
          />
        </Link>
      </div>
      {isBreakpoint ? (
        <NavigationLinkContainer
          href='/profile'
          ariaLabel='My profile'
          pathName={pathname}
          size='mobile'
        >
          <ProfileRouteIcon pathName={pathname} height={28} width={28} />
        </NavigationLinkContainer>
      ) : (
        <DesktopNav />
      )}
    </header>
  );
}
