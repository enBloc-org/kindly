'use client';

import DonateBrowseButtons from './DonateBrowseButtons';

export default function GetStartedSection() {
  return (
    <div className='mx-auto flex  w-[90%] justify-center  lg:max-w-[1080px]'>
      <div className='my-[40px] flex w-full flex-col items-center lg:my-[96px]'>
        <div className='mb-16 flex w-full flex-col items-center text-center'>
          <h2 className='mb-6 px-10 text-[24px] font-[600] text-gray-800 md:text-[36px] lg:text-[48px] lg:font-medium'>
            Spread Some Kindness: Give KYNDLY to Refugees
          </h2>
          <h5 className='px-4 text-[18px] font-medium text-gray-700 md:text-[20px] lg:text-[24px]'>
            Join the KINDLY revolution today: share what you can spare, find
            what you need!
          </h5>
          <DonateBrowseButtons />
        </div>
      </div>
    </div>
  );
}
