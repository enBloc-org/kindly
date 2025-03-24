import React from 'react';
import { IconPropType } from '@/types/searchPageTypes';

const GlobeIcon: React.FC<IconPropType> = ({ width = 85, height = 85 }) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox='0 0 85 85'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      <path
        d='M12.5 32.8333H68.5M12.5 56.8333H68.5M40.5 76.8333C58.252 76.8333 
        72.5 62.7293 72.5 44.9773C72.5 27.2253 58.252 12.8333 40.5 
        12.8333C22.748 12.8333 8.5 27.2253 8.5 44.9773C8.5 62.7293 22.748 
        76.8333 40.5 76.8333Z'
        className='stroke-primaryOrange'
        strokeWidth={2}
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <path
        fillRule='evenodd'
        clipRule='evenodd'
        d='M40.5 76.8333C49.376 76.8333 56.5 62.7293 56.5 44.9773C56.5 
        27.2253 49.376 12.8333 40.5 12.8333C31.624 12.8333 24.5 
        27.2253 24.5 44.9773C24.5 62.7293 31.624 76.8333 40.5 76.8333Z'
        className='stroke-primaryOrange'
        strokeWidth={2}
        strokeLinecap='round'
        strokeLinejoin='round'
      />
    </svg>
  );
};

export default GlobeIcon;
