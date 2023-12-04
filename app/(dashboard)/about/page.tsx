import React from 'react';
import Link from 'next/link';
import { FaInstagramSquare, FaTwitter } from 'react-icons/fa';
import { FaSquareThreads } from 'react-icons/fa6';
import FAQItem from '@/components/FAQcard';
import questionsAndAnswers from '@/utils/faqsArray';

const AboutPage = () => {
  return (
    <div className='flex flex-col items-center justify-center gap-10 px-10 mt-10 lg:text-lg lg:gap-20'>
      <h1 className='font-extrabold text-4xl p-10 text-center'>About</h1>
      <p className='lg:px-96'>
        KINDLY is a platform that lets you donate unwanted items to Ukrainian
        refugees. Donors can upload unwanted clothes, shoes, toys, books and
        household items. Your generous contributions will help adults and
        children who’ve fled the war in Ukraine. In the future we hope to expand
        KINDLY to serve the wider refugee community.
      </p>
      <p className='lg:px-96'>
        KINDLY is a sister project to{' '}
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
        by <span className='font-extrabold'>Founders and Coders</span>.
      </p>
      <p className='lg:px-96'>
        You can contact KINDLY via email (xxx insert email when available)
        Follow the KINDLY journey on Instagram, Facebook, Threads.
      </p>
      <div className='flex justify-center gap-14 my-5'>
        <Link href=''>
          <FaInstagramSquare size={60} />
        </Link>
        <Link href=''>
          <FaSquareThreads size={60} />
        </Link>
        <Link href=''>
          <FaTwitter size={60} />
        </Link>
      </div>
      <div>
        <h2 className='font-extrabold text-4xl text-center mt-8'>FAQs</h2>
        {questionsAndAnswers.map((faq, index) => (
          <FAQItem key={index} {...faq}></FAQItem>
        ))}
      </div>
    </div>
  );
};

export default AboutPage;
