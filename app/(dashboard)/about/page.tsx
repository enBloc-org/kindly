import React from 'react';
import Link from 'next/link';
import { FaInstagramSquare, FaTwitter } from 'react-icons/fa';
import { FaSquareThreads } from 'react-icons/fa6';

const AboutPage = () => {
  return (
    <div className='p-6'>
      <h1 className='font-extrabold text-4xl text-center'>About</h1>
      <div className='my-5 text-justify'>
        KINDLY is a platform that lets you donate unwanted items to Ukrainian
        refugees. Donors can upload unwanted clothes, shoes, toys, books and
        household items. Your generous contributions will help adults and
        children who’ve fled the war in Ukraine. In the future we hope to expand
        KINDLY to serve the wider refugee community. KINDLY is a sister project
        to{' '}
        <Link
          className='text-primaryOrange font-extrabold'
          href='https://linktr.ee/trafalgargirls'
        >
          Trafalgar Girls
        </Link>
        , a volunteer initiative that’s helped thousands of Ukrainian refugees
        since the war began in February 2022. The KINDLY site was created
        through the{' '}
        <Link
          className='text-primaryOrange font-extrabold'
          href='https://www.foundersandcoders.com/tech-for-better/'
        >
          Tech for Better programme
        </Link>{' '}
        by <span className='font-extrabold'>Founders and Coders</span>. You can
        contact KINDLY via email (xxx insert email when available) Follow the
        KINDLY journey on Instagram, Facebook, Threads (icons, hyperlinks will
        be available at later date xxx){' '}
        <div className='flex justify-center my-5'>
          <Link href=''>
            <FaInstagramSquare />
          </Link>
          <Link href=''>
            <FaSquareThreads />
          </Link>
          <Link href=''>
            <FaTwitter />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
