'use client';
import { Dispatch } from 'react';
import ApparelSubcategory from './ApparelSubcategory';
import CategoryButton from './CategoryButton';
import ShirtIcon from '../../icons/ShirtIcon';
import ShoeIcon from '../../icons/ShoeIcon';
import ToyIcon from '../../icons/ToyIcon';
import BookIcon from '../../icons/BookIcon';
import HomeIcon from '../../icons/HomeIcon';
import BooksSubcategory from './BooksSubcategory';
import { SearchParamsType } from '@/types/searchPageTypes';

type QuickBrowseProps = {
  searchParams: SearchParamsType;
  setSearchParams: Dispatch<React.SetStateAction<SearchParamsType>>;
  handleSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
};

const QuickBrowse: React.FC<QuickBrowseProps> = ({
  searchParams,
  setSearchParams,
  handleSubmit,
}) => {
  const handleCategoryClick = (value: string) => {
    if (searchParams.category === value) {
      setSearchParams((prev) => ({ ...prev, category: '' }));
    } else {
      setSearchParams((prev) => ({ ...prev, category: value }));
    }
  };

  const handleSubcategoryClick = (value: string) => {
    if (searchParams.subcategory === value) {
      setSearchParams((prev) => ({ ...prev, subcategory: '' }));
    } else {
      setSearchParams((prev) => ({ ...prev, subcategory: value }));
    }
  };

  return (
    <div className='m-auto max-w-xl'>
      <div className='mt-10 flex justify-between gap-1 px-2 text-sm'>
        <CategoryButton
          handleButtonClick={handleCategoryClick}
          category={searchParams.category}
          option='clothing'
        >
          Clothing
          <ShirtIcon category={searchParams.category} />
        </CategoryButton>
        <CategoryButton
          handleButtonClick={handleCategoryClick}
          category={searchParams.category}
          option='shoes'
        >
          Shoes
          <ShoeIcon category={searchParams.category} />
        </CategoryButton>

        <CategoryButton
          handleButtonClick={handleCategoryClick}
          category={searchParams.category}
          option='toys'
        >
          Toys
          <ToyIcon category={searchParams.category} />
        </CategoryButton>
        <CategoryButton
          handleButtonClick={handleCategoryClick}
          category={searchParams.category}
          option='books'
        >
          Books
          <BookIcon category={searchParams.category} />
        </CategoryButton>
        <CategoryButton
          handleButtonClick={handleCategoryClick}
          category={searchParams.category}
          option='household'
        >
          Home
          <HomeIcon category={searchParams.category} />
        </CategoryButton>
      </div>
      {['shoes', 'clothing'].includes(searchParams.category) && (
        <ApparelSubcategory
          subcategory={searchParams.subcategory}
          handleButtonClick={handleSubcategoryClick}
        />
      )}
      {searchParams.category === 'books' && (
        <BooksSubcategory
          subcategory={searchParams.subcategory}
          handleButtonClick={handleSubcategoryClick}
        />
      )}

      {searchParams.category.length > 0 && (
        <div className='mt-10 flex justify-center'>
          <button
            className='button button-rounded'
            type='button'
            aria-label='See results'
            onClick={handleSubmit}
          >
            Apply Filters
          </button>
        </div>
      )}
    </div>
  );
};

export default QuickBrowse;
