import React from 'react';

interface InfoCardProps {
  Icon: React.FC<{ width?: number; height?: number }>;
  title: string;
}

const InfoCard: React.FC<InfoCardProps> = ({ Icon, title }) => {
  return (
    <div className='flex h-[171px] w-full max-w-[171px] flex-col items-center  justify-center rounded-lg bg-orange-100  text-center shadow-md lg:h-[255px] lg:max-w-[255px]'>
      <Icon width={64} height={64} />
      <p className='mt-4 text-[14px] font-medium text-gray-800 lg:text-[20px]'>
        {title}
      </p>
    </div>
  );
};

export default InfoCard;
