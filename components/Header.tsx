'use client';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';

export default function Header() {
  const pathname = usePathname();
  console.log(pathname);

  return (
    <header className='flex justify-between py-2 px-4 shadow-sm min-h-30'>
      <div
        className={`flex items-center border-4 rounded-full ${
          pathname === '/search'
            ? 'border-primaryOrange'
            : 'border-primaryGreen'
        }`}
      >
        <Link href='/search' className='p-2'>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            width='40'
            height='40'
            viewBox='0 0 16 16'
          >
            <path
              fill={pathname === '/search' ? '#FF9E5E' : '#54BB89'}
              d='M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0a5.5 5.5 0 0 1 11 0'
            />
          </svg>{' '}
        </Link>
      </div>
      <div className='flex items-center'>
        <Link href='/home-page'>
          <Image
            src='/KINDLY_LOGO.png'
            alt='Kindly Logo'
            height={50}
            width={90}
          />
        </Link>
      </div>
    </header>
  );
}
