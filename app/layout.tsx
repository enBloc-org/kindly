import React from 'react';
import './globals.css';
import DynamicFooter from '@/components/footer/DynamicFooter';

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
  return (
    <html lang='en' className='h-full'>
      <body className='h-full'>
        <div className='flex min-h-screen flex-col'>
          <div className='flex-grow'>{children}</div>
          <DynamicFooter />
        </div>
      </body>
    </html>
  );
}
