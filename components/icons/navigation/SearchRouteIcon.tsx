import { NavigationIconType } from './NavigationIconType';

const SearchRouteIcon: React.FC<NavigationIconType> = ({ width, height }) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox='0 0 42 42'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      <path
        d='M19 26C22.866 26 26 22.866 26 19C26 15.134 22.866 12 19 12C15.134 12 12 15.134 12 19C12 22.866 15.134 26 19 26Z'
        stroke='#333333'
        strokeWidth='2'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <path
        d='M30 30L24 24'
        stroke='#333333'
        strokeWidth='2'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
    </svg>
  );
};

export default SearchRouteIcon;
