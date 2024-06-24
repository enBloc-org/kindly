import React from 'react';
import Link from 'next/link';
import { FaInstagramSquare, FaTwitter } from 'react-icons/fa';
import { FaSquareThreads } from 'react-icons/fa6';
import questionsAndAnswers from '@/utils/faqsArray';
import AccordionItem from '@/components/accordian/AccordionItem';

const AboutPage = () => {
  return (
    <div className='mt-10 flex flex-col items-center justify-center gap-10 px-10 md:px-20 lg:gap-20 lg:px-48 lg:text-lg xl:px-80'>
      <h1 className='p-10 text-center text-4xl font-extrabold'>About</h1>
      <p>
        KINDLY is a platform that lets you donate unwanted items to Ukrainian
        refugees. Donors can upload unwanted clothes, shoes, toys, books and
        household items. Your generous contributions will help adults and
        children who’ve fled the war in Ukraine. In the future we hope to expand
        KINDLY to serve the wider refugee community.
      </p>
      <p>
        KINDLY is a sister project to{' '}
        <Link
          className='font-extrabold text-primaryOrange'
          href='https://linktr.ee/trafalgargirls'
        >
          Trafalgar Girls
        </Link>
        , a volunteer initiative that’s helped thousands of Ukrainian refugees
        since the war began in February 2022. The KINDLY site was created
        through the{' '}
        <Link
          className='font-extrabold text-primaryOrange'
          href='https://www.foundersandcoders.com/tech-for-better/'
        >
          Tech for Better programme
        </Link>{' '}
        by <span className='font-extrabold'>Founders and Coders</span>.
      </p>
      <p className='text-center'>Follow the KINDLY journey:</p>
      <div className='my-5 flex justify-center gap-14'>
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
        <h2 className='my-8 text-center text-4xl font-extrabold'>FAQs</h2>
        {questionsAndAnswers.map((faq, index) => (
          <AccordionItem key={index} {...faq} />
        ))}
      </div>
    </div>
  );
};

export default AboutPage;
