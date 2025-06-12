import React from 'react';
import BackButton from '@/components/buttons/BackButton';

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <BackButton />
      {children}
    </>
  );
}
