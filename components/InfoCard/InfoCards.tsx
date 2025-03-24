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
    <div className='xs:grid-cols-2 mx-auto grid max-w-5xl grid-cols-2 gap-4 p-4 sm:gap-6 sm:p-6 md:grid-cols-2 lg:grid-cols-4'>
      {cardData.map((card, index) => (
        <InfoCard key={index} Icon={card.Icon} title={card.title} />
      ))}
    </div>
  );
};

export default InfoCards;
