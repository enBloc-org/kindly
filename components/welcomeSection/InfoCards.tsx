import React from 'react';
import InfoCard from './InfoCard';
import GlobeIcon from '@/components/icons/InfoCardIcons/GlobeIcon';
import HandHeartIcon from '@/components/icons/InfoCardIcons/HandHeartIcon';
import HeartIcon from '@/components/icons/InfoCardIcons/HeartIcon';
import UsersIcon from '@/components/icons/InfoCardIcons/UsersIcon';

const cardData = [
  { Icon: GlobeIcon, title: 'Give new life to your unwanted items' },
  { Icon: HeartIcon, title: 'Support Ukrainian refugees in need' },
  { Icon: UsersIcon, title: 'Join the community that makes difference' },
  { Icon: HandHeartIcon, title: 'Contribute to a sustainable future' },
];

const InfoCards: React.FC = () => {
  return (
    <div className='mx-auto flex w-[90%] justify-center  lg:max-w-[1080px]'>
      <div className='my-[40px] flex w-full flex-col items-center lg:my-[96px]'>
        <div className='mb-16 flex w-full flex-col items-center text-center'>
          <h1 className='mb-6 px-10 text-[28px] font-[600] text-gray-800 md:text-[36px] lg:text-[56px] lg:font-medium'>
            Welcome to KINDLY - Where Compassion Meets Sustainability
          </h1>
          <h5 className='px-4 text-[18px] text-gray-700 md:text-[20px] lg:text-[24px] '>
            Helping Ukrainian refugees in the UK through donated clothes and
            personal items.
          </h5>
        </div>
        <div className=' flex  w-full flex-wrap  justify-around gap-y-2 lg:justify-between lg:gap-y-6'>
          {cardData.map((card, index) => (
            <InfoCard key={index} Icon={card.Icon} title={card.title} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default InfoCards;
