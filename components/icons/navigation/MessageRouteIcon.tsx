import { NavigationIconType } from './NavigationIconType';

const HomeRouteIcon: React.FC<NavigationIconType> = ({
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
      <path
        fill='none'
        stroke={pathName === '/conversations' ? '#FF9E5E' : '#54BB89'}
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeWidth={2}
        d='m3 20l1.3-3.9C1.976 12.663 2.874 8.228 6.4 5.726c3.526-2.501 8.59-2.296 11.845.48c3.255 2.777 3.695 7.266 1.029 10.501C16.608 19.942 11.659 20.922 7.7 19z'
      ></path>
    </svg>
  );
};

export default HomeRouteIcon;
