import { NavigationIconType } from './NavigationIconType';

const ProfileRouteIcon: React.FC<NavigationIconType> = ({ width, height }) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox='0 0 22 22'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      <g clipPath='url(#clip0_481_4745)'>
        <path
          d='M10.6666 9.77774C12.6303 9.77774 14.2222 8.18586 14.2222 6.22218C14.2222 4.2585 12.6303 2.66663 10.6666 2.66663C8.70296 2.66663 7.11108 4.2585 7.11108 6.22218C7.11108 8.18586 8.70296 9.77774 10.6666 9.77774Z'
          stroke='#333333'
          strokeWidth='1.24444'
          strokeLinecap='round'
          strokeLinejoin='round'
        />
        <path
          d='M5.33325 18.6667V16.8889C5.33325 15.9459 5.70785 15.0416 6.37465 14.3748C7.04145 13.708 7.94582 13.3334 8.88881 13.3334H12.4444C13.3874 13.3334 14.2917 13.708 14.9585 14.3748C15.6253 15.0416 15.9999 15.9459 15.9999 16.8889V18.6667'
          stroke='#333333'
          strokeWidth='1.24444'
          strokeLinecap='round'
          strokeLinejoin='round'
        />
      </g>
      <defs>
        <clipPath id='clip0_481_4745'>
          <rect width='21.3333' height='21.3333' fill='white' />
        </clipPath>
      </defs>
    </svg>
  );
};

export default ProfileRouteIcon;
