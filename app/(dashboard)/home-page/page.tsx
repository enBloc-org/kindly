/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import giveKindly from '../../../public/giveKindly.png';

const HomePage = () => {
  return (
    <>
      <div className='max-w-lg m-auto'>
        <Image
          alt='give kindly image'
          src={giveKindly}
          height={300}
          className='m-auto'
        />
      </div>
      <div className='grid gap-10 px-12 mt-16 md:px-40 xl:grid-cols-2 lg:p-20 lg:gap-20'>
        <div className='flex flex-col gap-8 lg:px-10'>
          <h1 className='font-extrabold text-4xl text-center'>
            What do we do?
          </h1>
          <p className='mt-5 md:px-16 lg:px-0'>
            Welcome to KINDLY, the giving platform where compassion meets
            sustainability! Please help us in our mission supplying clothes and
            other personal items to Ukrainian refugees. By donating you won’t
            just be providing warmth and dignity to people in need, you’ll be
            contributing to a greener planet too!
          </p>
          <p className='mt-5 md:px-16 lg:px-0'>
            The KINDLY team are asking for donations of clothes and shoes
            (adults and kids sizes) as well as books, toys, and household items.
            We encourage you to share what you can spare, declutter your life,
            and work toward a more mindful and eco-conscious future. Together,
            let's weave a tapestry of kindness and sustainability!
          </p>
        </div>
        <div className='flex flex-col gap-8 lg:px-10'>
          <h2 className='font-extrabold text-4xl text-center'>Blog</h2>
          <p className='mt-5 md:px-16 lg:px-0'>
            Hello and welcome! We’re very excited to be launching KINDLY, a
            platform which lets you donate unwanted items to Ukrainian refugees.
            In the future we hope to expand KINDLY to serve the wider refugee
            community.
          </p>
          <p className='mt-5 md:px-16 lg:px-0'>
            KINDLY is a sister project to{' '}
            <Link
              className='text-primaryOrange font-extrabold'
              href='https://linktr.ee/trafalgargirls'
            >
              Trafalgar Girls
            </Link>
            , a volunteer initiative that’s helped thousands of Ukrainian
            refugees since the war began in February 2022. The KINDLY site was
            created through the{' '}
            <Link
              className='text-primaryOrange font-extrabold'
              href='https://www.foundersandcoders.com/tech-for-better/'
            >
              Tech for Better programme
            </Link>{' '}
            by <span className='font-extrabold'>Founders and Coders</span>.
          </p>
          <p className='mt-5 md:px-16 lg:px-0'>
            So let the KINDLY journey begin! Do you have unwanted clothes or
            shoes (adults and kids sizes), toys, books, or household items?
            Upload the details to KINDLY, spread some kindness, and help the
            planet! Thank you KINDLY.
          </p>
        </div>
      </div>
    </>
  );
};

export default HomePage;
