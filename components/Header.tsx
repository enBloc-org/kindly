'use client';
import Link from 'next/link';
import Image from 'next/image';
import DesktopNav from './DesktopNav';
import useMediaQuery from './hooks/useMediaQuery';

export default function Header() {
  const isBreakpoint = useMediaQuery(1000);
  return (
    <header className='sticky top-0 bg-background flex justify-between py-2 px-4 z-10 shadow-sm min-h-30'>
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
      {!isBreakpoint && <DesktopNav />}
    </header>
  );
}
