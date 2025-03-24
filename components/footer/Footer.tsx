import React from 'react';
import Link from 'next/link';
import FacebookIcon from '@/components/icons/social-icons/FacebookIcon';
import InstagramIcon from '@/components/icons/social-icons/InstagramIcon';
import ThreadsIcon from '@/components/icons/social-icons/ThreadsIcon';
import LinkedInIcon from '@/components/icons/social-icons/LinkedInIcon';
import { defaultCompanyInfo, defaultSocialLinks } from '@/constants/footer';
import { FooterProps } from '@/types/footer';

const Footer: React.FC<FooterProps> = ({
  companyInfo = defaultCompanyInfo,
  socialLinks = defaultSocialLinks,
}) => {
  return (
    <footer className='mt-auto w-full bg-brand-80 text-gray-800'>
      <div className='mx-auto max-w-7xl px-4 py-8 md:px-12 lg:px-24'>
        <div className='grid grid-cols-1 sm:grid-cols-1 md:grid-cols-4 md:gap-4 lg:grid-cols-4 lg:gap-6'>
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
              {socialLinks.linkedin && (
                <Link
                  href={socialLinks.linkedin}
                  className='text-gray-600 hover:text-gray-900'
                >
                  <LinkedInIcon className='h-6 w-6' />
                </Link>
              )}
            </div>
            <div className='mt-4 text-sm'>
              <p className='font-bold'>{companyInfo.name}</p>
              <p>
                UK Registered Company Number {companyInfo.registrationNumber}
              </p>
              <p className='mt-2 font-bold'>Registered Address</p>
              <p>{companyInfo.address}</p>
            </div>
          </div>
          <div className='hidden md:block  md:pl-8 lg:pl-20'>
            <h3 className='mb-4 font-bold'>Company Info</h3>
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
          <div className='hidden md:block  md:pl-10 lg:pl-24'>
            <h3 className='mb-4  font-bold'>Pages</h3>
            <ul className='space-y-2 text-sm'>
              <li>
                <Link href='/search'>Browse Items</Link>
              </li>
              <li>
                <Link href='/add-item'>Post an Item</Link>
              </li>
              <li>
                <Link href='/conversations'>Messages</Link>
              </li>
              <li>
                <Link href='/profile'>Profile</Link>
              </li>
            </ul>
          </div>
          <div className='hidden md:block  md:pl-6 lg:pl-12'>
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
      </div>
      <div className='h-8 border-t border-gray-200 bg-primaryOrange py-2'>
        <div className='mx-auto max-w-7xl px-4'>
          <p className='text-center text-sm text-white'>
            ©2024 {companyInfo.name}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
