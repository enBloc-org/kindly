import React from 'react';
import './globals.css';
import Header from '@/components/Header';
import { headers } from 'next/headers';

const defaultUrl = process.env.AWS_AMPLIFY
  ? process.env.AWS_AMPLIFY
  : 'http://localhost:3000';

export const metadata = {
  metadataBase: new URL(defaultUrl),
  title: 'Kindly',
  description: 'Give Kindly',
  icons: {
    icon: ['/favicon.ico?v=4'],
    apple: ['/apple-touch-icon.png?v=4'],
    shortcut: ['/apple-touch-icon.png'],
  },
  manifest: '/site.webmanifest',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const headersList = headers();
  const userId = headersList.get('k-active-user');
  return (
    <html lang='en'>
      <body>
        <Header userId={userId} />
        {children}
      </body>
    </html>
  );
}
