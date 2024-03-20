'use client';
import Link from 'next/link';
import Image from 'next/image';
import DesktopNav from './DesktopNav';
import useMediaQuery from './hooks/useMediaQuery';

export default function Header() {
  const isBreakpoint = useMediaQuery(1000);
  return (
    <header className='min-h-30 sticky top-0 z-10 flex justify-between bg-background px-4 py-2 shadow-sm'>
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
