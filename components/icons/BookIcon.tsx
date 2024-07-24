import { IconPropType } from '@/types/searchPageTypes';

const BookIcon: React.FC<IconPropType> = ({ category }) => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width='50'
      height='50'
      viewBox='0 0 16 16'
    >
      <path
        fill={category === 'books' ? '#FF9E5E' : 'currentColor'}
        d='M15 4.7V4a6.804 6.804 0 0 0-4.484-1.999a2.844 2.844 0 0 0-2.513.995a3.02 3.02 0 0 0-2.515-.995A6.804 6.804 0 0 0 1 4v.7L0 5v10l6.7-1.4l.3.4h2l.3-.4L16 15V5zm-9.52 6.61a8.206 8.206 0 0 0-3.526.902L2 4.42A5.22 5.22 0 0 1 5.369 3a4.553 4.553 0 0 1 2.159.701l-.019 7.869a6.548 6.548 0 0 0-2.039-.259zm8.52.88a8.122 8.122 0 0 0-3.468-.88l-.161-.002c-.66 0-1.297.096-1.899.274l.047-7.902a4.484 4.484 0 0 1 2.096-.679a5.216 5.216 0 0 1 3.386 1.422l-.003 7.768z'
      />
    </svg>
  );
};

export default BookIcon;
