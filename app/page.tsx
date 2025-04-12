'use client';

/* eslint-disable react/no-unescaped-entities */
import Providers from '@/context/Providers';
import Header from '@/components/Header';
import Link from 'next/link';
import React from 'react';
import DisplayRecentlyAddedItems from '@/components/DisplayRecentlyAddedItems';
import InfoCards from '@/components/welcomeSection/InfoCards';
import GetStartedSection from '@/components/getStartedSection/GetStartedSection';

export default function Index() {
  return (
    <Providers>
      <Header />
      <InfoCards />
      <GetStartedSection />
      <DisplayRecentlyAddedItems />
      <div className='mx-auto flex  w-[90%] justify-center  lg:max-w-[1080px]'>
        <div className='my-[40px] flex w-full flex-col items-center lg:my-[96px]'>
          <div className='mb-16 flex w-full flex-col items-center text-center'>
            <h2 className='mb-6 px-10 text-[24px] font-[600] text-gray-800 md:text-[36px] lg:text-[48px] lg:font-medium'>
              Our Story
            </h2>
            <p className='px-4 text-[16px] font-[400] text-gray-700 md:text-[18px] lg:text-[20px] lg:font-[700]'>
              KINDLY is a sister project of{' '}
              <Link
                className='font-extrabold text-primaryOrange'
                href='https://linktr.ee/trafalgargirls'
              >
                Trafalgar Girls
              </Link>
              , a volunteer initiative that’s helped thousands of refugees since
              the russian invasion of Ukraine in February 2022. KYNDLY was
              developed under{' '}
              <Link
                className='font-extrabold text-primaryOrange'
                href='https://www.foundersandcoders.com/tech-for-better/'
              >
                Tech for Better programme
              </Link>{' '}
              run by Founders and Coders. Volunteers from Founders & Coders are
              still giving us their invaluable time and effort, alongside
              Ukrainian refugee programmers and volunteers from around the
              globe.
            </p>{' '}
            <br></br>
            <p className='px-4 text-[16px] font-[400] text-gray-700 md:text-[18px] lg:text-[20px] lg:font-[700]'>
              Ready to start your KYNDLY journey? We’re looking for clothes &
              shoes (for adults or kids), as well as books, toys & household
              items.{' '}
              <Link
                className='font-extrabold text-primaryOrange'
                href='https://linktr.ee/trafalgargirls'
              >
                Donate today
              </Link>
              , spread some kindness, and help the planet!
            </p>
            <br></br>
            <p className='px-4 text-[16px] font-[400] text-gray-700 md:text-[18px] lg:text-[20px] lg:font-[700]'>
              Thank you KYNDLY.
            </p>
          </div>
        </div>
      </div>
    </Providers>
  );
}
