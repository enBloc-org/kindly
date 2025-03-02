import React from 'react';
import Link from 'next/link';
import FacebookIcon from '@/components/icons/FacebookIcon';
import InstagramIcon from '@/components/icons/InstagramIcon';
import ThreadsIcon from '@/components/icons/ThreadsIcon';

type FooterProps = {
  companyInfo?: {
    name: string;
    registrationNumber: string;
    address: string;
  };
  socialLinks?: {
    facebook?: string;
    instagram?: string;
    threads?: string;
  };
};

const Footer: React.FC<FooterProps> = ({
  companyInfo = {
    name: 'KYNDLY CIC',
    registrationNumber: '16077388',
    address: '7 Bell Yard, London, WC2A 2JR',
  },
  socialLinks = {
    facebook: 'https://facebook.com',
    instagram: 'https://instagram.com',
    threads: 'https://threads.net',
  },
}) => {
  return (
    <footer className='bg-brand-80 w-full text-gray-800'>
      <div className='mx-auto max-w-7xl  px-4 py-8'>
        <div className='hidden md:grid md:grid-cols-4 md:gap-8'>
          <div>
            <h3 className='mb-4 font-bold'>Follow us at:</h3>
            <div className='flex space-x-4'>
              {socialLinks.facebook && (
                <Link
                  href={socialLinks.facebook}
                  className='text-gray-600 hover:text-gray-900'
                >
                  <FacebookIcon className='h-6 w-6' />
                </Link>
              )}
              {socialLinks.instagram && (
                <Link
                  href={socialLinks.instagram}
                  className='text-gray-600 hover:text-gray-900'
                >
                  <InstagramIcon className='h-6 w-6' />
                </Link>
              )}
              {socialLinks.threads && (
                <Link
                  href={socialLinks.threads}
                  className='text-gray-600 hover:text-gray-900'
                >
                  <ThreadsIcon className='h-6 w-6' />
                </Link>
              )}
            </div>
            <div className='mt-4'>
              <p className='font-bold'>{companyInfo.name}</p>
              <p className='text-sm'>
                UK Registered Company Number {companyInfo.registrationNumber}
              </p>
              <p className='mt-2 text-sm font-bold'>Registered Address</p>
              <p className='text-sm'>{companyInfo.address}</p>
            </div>
          </div>
          <div>
            <h3 className='mb-4 font-bold'>Company info</h3>
            <ul className='space-y-2 text-sm'>
              <li>
                <Link href='/about'>About Kyndly</Link>
              </li>
              <li>
                <Link href='/faq'>Frequently Asked Questions</Link>
              </li>
              <li>
                <Link href='/contact'>Contacts</Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className='mb-4 font-bold'>Pages</h3>
            <ul className='space-y-2 text-sm'>
              <li>
                <Link href='/browse'>Browse Items</Link>
              </li>
              <li>
                <Link href='/post'>Post an Item</Link>
              </li>
              <li>
                <Link href='/messages'>Messages</Link>
              </li>
              <li>
                <Link href='/profile'>Profile</Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className='mb-4 font-bold'>Additional</h3>
            <ul className='space-y-2 text-sm'>
              <li>
                <Link href='/privacy'>Privacy Policy</Link>
              </li>
              <li>
                <Link href='/terms'>Terms and Conditions</Link>
              </li>
            </ul>
          </div>
        </div>
        <div className='md:hidden'>
          <h3 className='mb-4 font-medium'>Follow us at:</h3>
          <div className='flex space-x-4'>
            {socialLinks.facebook && (
              <Link
                href={socialLinks.facebook}
                className='text-gray-600 hover:text-gray-900'
              >
                <FacebookIcon className='h-6 w-6' />
              </Link>
            )}
            {socialLinks.instagram && (
              <Link
                href={socialLinks.instagram}
                className='text-gray-600 hover:text-gray-900'
              >
                <InstagramIcon className='h-6 w-6' />
              </Link>
            )}
            {socialLinks.threads && (
              <Link
                href={socialLinks.threads}
                className='text-gray-600 hover:text-gray-900'
              >
                <ThreadsIcon className='h-6 w-6' />
              </Link>
            )}
          </div>
          <div className='mt-4 space-y-2 text-sm'>
            <Link href='/privacy' className='block'>
              Privacy Policy
            </Link>
            <Link href='/terms' className='block'>
              Terms and Conditions
            </Link>
          </div>
          <div className='mt-4'>
            <p className='font-medium'>{companyInfo.name}</p>
            <p className='text-sm'>
              UK Registered Company Number {companyInfo.registrationNumber}
            </p>
            <p className='mt-2 text-sm'>Registered Address</p>
            <p className='text-sm'>{companyInfo.address}</p>
          </div>
        </div>
      </div>
      <div className='h-8 border-t border-gray-200 bg-primaryOrange py-2'>
        <div className='mx-auto max-w-7xl px-4'>
          <p className='text-center text-sm leading-[14px] text-white'>
            ©2024 {companyInfo.name}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
