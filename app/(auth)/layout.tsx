import React from 'react';
import Image from 'next/image';

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <header className=' top-0 bg-background flex justify-between py-2 px-4 shadow-sm min-h-30'>
        <Image
          src='/KINDLY_LOGO.png'
          alt='Kindly Logo'
          height={50}
          width={90}
        />
      </header>
      {children}
    </>
  );
}
