'use client';
import { useState } from 'react';
import ApparelSubcategory from './ApparelSubcategory';
import CategoryButton from './CategoryButton';
import { useRouter } from 'next/navigation';

const QuickBrowse = () => {
  const [category, setCategory] = useState('');
  const [subcategory, setSubcategory] = useState('');
  const router = useRouter();

  const handleButtonClick = (value: string) => {
    setCategory(value);
  };

  const onSearchHandler = () => {
    router.push(`/search/?category=${category}&subcategory=${subcategory}`);
    setCategory('');
    setSubcategory('');
  };

  return (
    <div>
      <h1 className='font-semibold italic ml-4 mt-16'>Quick search:</h1>
      <div className='flex justify-between gap-1 px-2 mt-10 text-sm'>
        <CategoryButton
          handleButtonClick={handleButtonClick}
          category={category}
          option='clothing'
        >
          Clothing:
          <svg
            xmlns='http://www.w3.org/2000/svg'
            width='50'
            height='50'
            viewBox='0 0 512 512'
          >
            <path
              fill={category === 'clothing' ? '#FF9E5E' : 'currentColor'}
              d='M256 96c33.08 0 60.71-25.78 64-58c.3-3-3-6-6-6a13 13 0 0 0-4.74.9c-.2.08-21.1 8.1-53.26 8.1s-53.1-8-53.26-8.1a16.21 16.21 0 0 0-5.3-.9h-.06a5.69 5.69 0 0 0-5.38 6c3.35 32.16 31 58 64 58Z'
            />
            <path
              fill={category === 'clothing' ? '#FF9E5E' : 'currentColor'}
              d='M485.29 89.9L356 44.64a4 4 0 0 0-5.27 3.16a96 96 0 0 1-189.38 0a4 4 0 0 0-5.35-3.16L26.71 89.9A16 16 0 0 0 16.28 108l16.63 88a16 16 0 0 0 13.92 12.9l48.88 5.52a8 8 0 0 1 7.1 8.19l-7.33 240.9a16 16 0 0 0 9.1 14.94A17.49 17.49 0 0 0 112 480h288a17.49 17.49 0 0 0 7.42-1.55a16 16 0 0 0 9.1-14.94l-7.33-240.9a8 8 0 0 1 7.1-8.19l48.88-5.52a16 16 0 0 0 13.92-12.9l16.63-88a16 16 0 0 0-10.43-18.1Z'
            />
          </svg>
        </CategoryButton>
        <CategoryButton
          handleButtonClick={handleButtonClick}
          category={category}
          option='shoes'
        >
          Shoes:
          <svg
            xmlns='http://www.w3.org/2000/svg'
            width='50'
            height='50'
            viewBox='0 0 15 15'
          >
            <path
              fill={category === 'shoes' ? '#FF9E5E' : 'currentColor'}
              d='M9.5 7a9.97 9.97 0 0 1-1.315-.948L6.01 3.221a.558.558 0 0 0-1 .279H5V5H3.209a.5.5 0 0 1-.357-.148S2.5 4 2 4h-.5a.5.5 0 0 0-.5.5V9h5.5c1.5 0 2 1 3.5 1h4v-.5C14 8 10.547 7.594 9.5 7Zm0 4a3.131 3.131 0 0 1-1.526-.447A4.1 4.1 0 0 0 6 10H1v1.5a.5.5 0 0 0 .5.5h4a.5.5 0 0 0 .5-.5V11a3.134 3.134 0 0 1 1.526.447A4.1 4.1 0 0 0 9.5 12h4a.5.5 0 0 0 .5-.5V11Z'
            />
          </svg>
        </CategoryButton>

        <CategoryButton
          handleButtonClick={handleButtonClick}
          category={category}
          option='toys'
        >
          Toys:
          <svg
            xmlns='http://www.w3.org/2000/svg'
            width='50'
            height='50'
            viewBox='0 0 24 24'
          >
            <path
              fill={category === 'toys' ? '#FF9E5E' : 'currentColor'}
              d='M15.75 19.13c-.83 0-1.5-.84-1.5-1.88c0-1.03.67-1.87 1.5-1.87s1.5.84 1.5 1.87c0 1.04-.67 1.88-1.5 1.88M12 11.25c-1.24 0-2.25-.84-2.25-1.87c0-1.04 1.01-1.88 2.25-1.88s2.25.84 2.25 1.88c0 1.03-1.01 1.87-2.25 1.87m-3.75 7.88c-.83 0-1.5-.84-1.5-1.88c0-1.03.67-1.87 1.5-1.87s1.5.84 1.5 1.87c0 1.04-.67 1.88-1.5 1.88M12 8.25c.41 0 .75.34.75.75s-.34.75-.75.75s-.75-.34-.75-.75s.34-.75.75-.75M18.75 12c-.32 0-.63.07-.91.2c-.48-.61-1.13-1.13-1.91-1.53c.57-.8.91-1.77.91-2.82v-.06c1.09-.23 1.91-1.2 1.91-2.37c0-1.33-1.09-2.42-2.42-2.42c-.69 0-1.33.29-1.75.75a4.813 4.813 0 0 0-5.16 0C9 3.29 8.36 3 7.67 3C6.34 3 5.25 4.09 5.25 5.42c0 1.16.82 2.13 1.9 2.37v.06c0 1.05.35 2.03.91 2.82c-.77.4-1.42.92-1.9 1.53A2.24 2.24 0 0 0 3 14.25c0 1.25 1 2.25 2.25 2.25h.06c-.04.24-.06.5-.06.75c0 2.07 1.34 3.75 3 3.75c1.01 0 1.9-.63 2.45-1.59c.42.06.85.09 1.3.09c.45 0 .88-.03 1.3-.09c.55.96 1.44 1.59 2.45 1.59c1.66 0 3-1.68 3-3.75c0-.25-.02-.51-.06-.75h.06c1.25 0 2.25-1 2.25-2.25S20 12 18.75 12'
            />
          </svg>
        </CategoryButton>
        <CategoryButton
          handleButtonClick={handleButtonClick}
          category={category}
          option='books'
        >
          Books:
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
        </CategoryButton>
        <CategoryButton
          handleButtonClick={handleButtonClick}
          category={category}
          option='household'
        >
          Home:
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
        </CategoryButton>
      </div>
      {category === 'clothing' && (
        <ApparelSubcategory
          setSubcategory={setSubcategory}
          subcategory={subcategory}
        />
      )}
      {category.length > 0 && (
        <button
          className='button button-rounded'
          type='button'
          onClick={onSearchHandler}
        >
          SEE RESULTS
        </button>
      )}
    </div>
  );
};

export default QuickBrowse;
