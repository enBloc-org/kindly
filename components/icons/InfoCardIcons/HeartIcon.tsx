import { IconPropType } from '@/types/searchPageTypes';

const HeartIcon: React.FC<IconPropType> = ({ width = 85, height = 85 }) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox='0 0 85 85'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      <g clipPath='url(#clip0_376_2694)'>
        <path
          d='M42.5 74.3332L71.8212 44.592C74.8984 41.5148 76.6271 
          37.3412 76.6271 32.9895C76.6271 28.6377 74.8984 24.4641 
          71.8212 21.387C68.744 18.3098 64.5705 16.5811 60.2187 
          16.5811C55.8669 16.5811 51.6934 18.3098 48.6162 21.387L42.5 
          27.0832L36.3837 21.387C33.3065 18.3098 29.133 16.5811 
          24.7812 16.5811C20.4294 16.5811 16.2559 18.3098 13.1787 
          21.387C10.1015 24.4641 8.3728 28.6377 8.3728 32.9895C8.3728 
          37.3412 10.1015 41.5148 13.1787 44.592L42.5 74.3332Z'
          className='stroke-primaryOrange'
          strokeWidth={2}
          strokeLinecap='round'
          strokeLinejoin='round'
        />
      </g>
      <defs>
        <clipPath id='clip0_376_2694'>
          <rect
            width='85'
            height='85'
            fill='white'
            transform='translate(0.5 0.833252)'
          />
        </clipPath>
      </defs>
    </svg>
  );
};

export default HeartIcon;
