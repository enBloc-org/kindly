import React from 'react';

interface InfoCardProps {
  Icon: React.FC<{ width?: number; height?: number }>;
  title: string;
}

const InfoCard: React.FC<InfoCardProps> = ({ Icon, title }) => {
  return (
    <div className='flex h-[255px] w-full max-w-[255px]  flex-col items-center justify-center rounded-lg bg-orange-100 p-6 text-center shadow-md'>
      <Icon width={64} height={64} />
      <p className='mt-4 font-medium text-gray-800'>{title}</p>
    </div>
  );
};

export default InfoCard;
