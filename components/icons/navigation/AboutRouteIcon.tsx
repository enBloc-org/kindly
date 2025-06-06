import { NavigationIconType } from './NavigationIconType';

const AboutRouteIcon: React.FC<NavigationIconType> = ({ width, height }) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox='0 0 24 25'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      <g clipPath='url(#clip0_2085_78)'>
        <path
          d='M8 8.66675C8 7.8711 8.36875 7.10804 9.02513 6.54543C9.6815 5.98282 10.5717 5.66675 11.5 5.66675H12.5C13.4283 5.66675 14.3185 5.98282 14.9749 6.54543C15.6313 7.10804 16 7.8711 16 8.66675C16.0368 9.316 15.8617 9.95964 15.501 10.5007C15.1402 11.0418 14.6135 11.451 14 11.6667C13.3865 11.9544 12.8598 12.5 12.499 13.2214C12.1383 13.9429 11.9632 14.8011 12 15.6667'
          stroke='#333333'
          strokeWidth='2'
          strokeLinecap='round'
          strokeLinejoin='round'
        />
        <path
          d='M12 19.6667V19.6767'
          stroke='#333333'
          strokeWidth='2'
          strokeLinecap='round'
          strokeLinejoin='round'
        />
      </g>
      <defs>
        <clipPath id='clip0_2085_78'>
          <rect
            width='24'
            height='24'
            fill='white'
            transform='translate(0 0.666748)'
          />
        </clipPath>
      </defs>
    </svg>
  );
};

export default AboutRouteIcon;
