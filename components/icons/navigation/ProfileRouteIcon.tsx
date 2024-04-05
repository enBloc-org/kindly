import { NavigationIconType } from './NavigationIconType';

const ProfileRouteIcon: React.FC<NavigationIconType> = ({
  pathName,
  width,
  height,
}) => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width={width}
      height={height}
      viewBox='0 0 24 24'
    >
      <svg fill='none' stroke={pathName === '/profile' ? '#FF9E5E' : '#54BB89'}>
        <path d='M4 18a4 4 0 0 1 4-4h8a4 4 0 0 1 4 4a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2Z' />
        <circle cx='12' cy='7' r='3.5' />
      </svg>
    </svg>
  );
};

export default ProfileRouteIcon;
