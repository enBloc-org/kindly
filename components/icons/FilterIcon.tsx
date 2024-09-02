import { IconPropType } from '@/types/searchPageTypes';

const FilterIcon: React.FC<IconPropType> = ({ width, height, active }) => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width={width || '1em'}
      height={height || '1em'}
      viewBox='0 0 512 512'
    >
      <path
        fill={active ? '#FF9E5E' : 'currentColor'}
        d='M238.627 496H192V253.828l-168-200V16h456v37.612l-160 200v161.015ZM224 464h1.373L288 401.373V242.388L443.51 48H60.9L224 242.172Z'
      />
    </svg>
  );
};

export default FilterIcon;
