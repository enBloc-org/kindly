import React from 'react';

interface InfoCardProps {
  Icon: React.FC<{ width?: number; height?: number }>;
  title: string;
}

const InfoCard: React.FC<InfoCardProps> = ({ Icon, title }) => {
  return (
    <div className='flex w-full flex-col items-center rounded-lg bg-orange-100 p-6 text-center shadow-md sm:w-64'>
      <Icon width={64} height={64} />
      <p className='mt-4 font-medium text-gray-800'>{title}</p>
    </div>
  );
};

export default InfoCard;
