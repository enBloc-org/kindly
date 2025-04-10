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
    <div className='mx-auto flex justify-center sm:w-[80%] lg:max-w-[1080px]'>
      <div className='my-[98px] flex w-full flex-col items-center'>
        <div className='mb-16 flex w-full flex-col items-center text-center'>
          <h1 className='mb-6 text-[56px] font-medium text-gray-800'>
            Welcome to KINDLY - Where
            <br />
            Compassion Meets Sustainability
          </h1>
          <h5 className='text-[24px] text-gray-700'>
            Helping Ukrainian refugees in the UK through donated clothes and
            personal items.
          </h5>
        </div>
        <div className='sm:justify-content-center flex  w-full flex-wrap justify-between gap-y-6 sm:gap-4'>
          {cardData.map((card, index) => (
            <InfoCard key={index} Icon={card.Icon} title={card.title} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default InfoCards;
