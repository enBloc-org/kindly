import { IconPropType } from '../filter/QuickBrowse';
const HomeIcon: React.FC<IconPropType> = ({ category }) => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width='50'
      height='50'
      viewBox='0 0 48 48'
    >
      <g
        fill='none'
        stroke={category === 'household' ? '#FF9E5E' : 'currentColor'}
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeWidth='4'
      >
        <path d='M23.001 13c-7.3 0-13.458 5.07-15.379 12H38.38c-1.92-6.93-8.079-12-15.379-12Z' />
        <path
          fill={category === 'household' ? '#FF9E5E' : 'currentColor'}
          d='M7.001 29.593c0 4.418 1.665 8.433 4.381 11.407H34.62c2.716-2.974 4.381-6.989 4.381-11.407c0-1.594-.217-3.134-.62-4.593H7.62C7.217 26.459 7 28 7 29.593Z'
        />
        <path d='M27 13v-2a4 4 0 0 0-4-4v0a4 4 0 0 0-4 4v2M7 28s-1.985-.131-3-2.5C2.5 22 5 20 6 17c.761-2.282-.793-3.986-1.58-4.67c-.252-.22-.42-.53-.42-.865v-.618c0-.489.354-.903.843-.92C5.878 9.887 7.663 9.996 9 11c2 1.5 3 6 3 6M9 41h28m2-16a5 5 0 1 0-4.584-7' />
      </g>
    </svg>
  );
};

export default HomeIcon;
