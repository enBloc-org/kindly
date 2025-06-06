import { NavigationIconType } from './NavigationIconType';

const AddItemRouteIcon: React.FC<NavigationIconType> = ({ width, height }) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox='-10 -10 42 42'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      <path
        d='M11.375 21.75C17.105 21.75 21.75 17.105 21.75 11.375C21.75 5.64505 17.105 1 11.375 1C5.64505 1 1 5.64505 1 11.375C1 17.105 5.64505 21.75 11.375 21.75Z'
        stroke='#333333'
        strokeWidth='2'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <path
        d='M7.91602 11.375H14.8327'
        stroke='#333333'
        strokeWidth='2'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <path
        d='M11.375 7.91699V14.8337'
        stroke='#333333'
        strokeWidth='2'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
    </svg>
  );
};

export default AddItemRouteIcon;
