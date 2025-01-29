import { NavigationIconType } from './NavigationIconType';

const HomeRouteIcon: React.FC<NavigationIconType> = ({ width, height }) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox='-6 -6  35 35'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      <g clipPath='url(#clip0_481_4725)'>
        <path
          d='M4.44453 10.6666H2.66675L10.6667 2.66663L18.6667 10.6666H16.889'
          stroke='#333333'
          strokeWidth='1.4'
          strokeLinecap='round'
          strokeLinejoin='round'
        />
        <path
          d='M4.44434 10.6666V16.8888C4.44434 17.3603 4.63164 17.8125 4.96503 18.1459C5.29843 18.4793 5.75062 18.6666 6.22211 18.6666H15.111C15.5825 18.6666 16.0347 18.4793 16.3681 18.1459C16.7015 17.8125 16.8888 17.3603 16.8888 16.8888V10.6666'
          stroke='#333333'
          strokeWidth='1.4'
          strokeLinecap='round'
          strokeLinejoin='round'
        />
        <path
          d='M8 18.6667V13.3333C8 12.8618 8.1873 12.4096 8.5207 12.0762C8.8541 11.7428 9.30628 11.5555 9.77778 11.5555H11.5556C12.0271 11.5555 12.4792 11.7428 12.8126 12.0762C13.146 12.4096 13.3333 12.8618 13.3333 13.3333V18.6667'
          stroke='#333333'
          strokeWidth='1.4'
          strokeLinecap='round'
          strokeLinejoin='round'
        />
      </g>
      <defs>
        <clipPath id='clip0_481_4725'>
          <rect width='21.3333' height='21.3333' fill='white' />
        </clipPath>
      </defs>
    </svg>
  );
};

export default HomeRouteIcon;
