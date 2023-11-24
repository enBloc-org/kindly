import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <header className=' bg-background flex justify-end py-2   '>
        <Image
          src='/KINDLY_LOGO.png'
          alt='Kindly Logo'
          height={308}
          width={129}
        />
      </header>
      <Link href='/home-page' className='inline-flex'>
        <svg
          xmlns='http://www.w3.org/2000/svg'
          width='66'
          height='55'
          viewBox='0 0 52 52'
          fill='none'
        >
          <circle cx='26' cy='26' r='26' fill='' />
          <path
            d='M15.9393 24.9393C15.3536 25.5251 15.3536 26.4749 15.9393 27.0607L25.4853 36.6066C26.0711 37.1924 27.0208 37.1924 27.6066 36.6066C28.1924 36.0208 28.1924 35.0711 27.6066 34.4853L19.1213 26L27.6066 17.5147C28.1924 16.9289 28.1924 15.9792 27.6066 15.3934C27.0208 14.8076 26.0711 14.8076 25.4853 15.3934L15.9393 24.9393ZM36 24.5L17 24.5V27.5L36 27.5V24.5Z'
            fill='#54BB89'
          />
        </svg>
      </Link>
      {children}
    </>
  );
}
