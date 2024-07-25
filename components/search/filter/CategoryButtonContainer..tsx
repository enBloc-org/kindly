import ApparelSubcategory from './ApparelSubcategory';
import CategoryButton from './CategoryButton';
import ShirtIcon from '../../icons/ShirtIcon';
import ShoeIcon from '../../icons/ShoeIcon';
import ToyIcon from '../../icons/ToyIcon';
import BookIcon from '../../icons/BookIcon';
import HomeIcon from '../../icons/HomeIcon';
import BooksSubcategory from './BooksSubcategory';
import {
  CategoryType,
  BooksSubcategoryType,
  ApparelSubcategoryType,
} from '@/types/searchPageTypes';

type CategoryButtonContainerProps = {
  searchParams: {
    category: CategoryType;
    subcategory: BooksSubcategoryType | ApparelSubcategoryType;
  };
  handleCategoryClick: (category: CategoryType) => void;
  handleSubcategoryClick: (
    subcategory: BooksSubcategoryType | ApparelSubcategoryType
  ) => void;
  handleFilterApply: () => void;
  handleFilterClear: () => void;
};

const CategoryButtonContainer: React.FC<CategoryButtonContainerProps> = ({
  searchParams,
  handleCategoryClick,
  handleSubcategoryClick,
  handleFilterApply,
  handleFilterClear,
}) => {
  return (
    <div className='m-auto max-w-xl'>
      <div className='mt-10 flex justify-between gap-1 px-2 text-sm'>
        <CategoryButton<CategoryType>
          handleButtonClick={handleCategoryClick}
          category={searchParams.category}
          option='clothing'
        >
          <ShirtIcon category={searchParams.category} />
          Clothing
        </CategoryButton>
        <CategoryButton<CategoryType>
          handleButtonClick={handleCategoryClick}
          category={searchParams.category}
          option='shoes'
        >
          <ShoeIcon category={searchParams.category} />
          Shoes
        </CategoryButton>

        <CategoryButton<CategoryType>
          handleButtonClick={handleCategoryClick}
          category={searchParams.category}
          option='toys'
        >
          <ToyIcon category={searchParams.category} />
          Toys
        </CategoryButton>
        <CategoryButton<CategoryType>
          handleButtonClick={handleCategoryClick}
          category={searchParams.category}
          option='books'
        >
          <BookIcon category={searchParams.category} />
          Books
        </CategoryButton>
        <CategoryButton<CategoryType>
          handleButtonClick={handleCategoryClick}
          category={searchParams.category}
          option='household'
        >
          <HomeIcon category={searchParams.category} />
          Home
        </CategoryButton>
      </div>
      {['shoes', 'clothing'].includes(searchParams.category) && (
        <ApparelSubcategory<ApparelSubcategoryType>
          subcategory={searchParams.subcategory}
          handleButtonClick={handleSubcategoryClick}
        />
      )}
      {searchParams.category === 'books' && (
        <BooksSubcategory<BooksSubcategoryType>
          subcategory={searchParams.subcategory}
          handleButtonClick={handleSubcategoryClick}
        />
      )}

      {searchParams.category.length > 0 && (
        <div className='mt-10 flex justify-center gap-6'>
          <button
            className='button button-rounded'
            type='button'
            aria-label='Apply filters'
            onClick={handleFilterApply}
          >
            APPLY FILTERS
          </button>
          <button
            className='button button-rounded'
            type='button'
            aria-label='Clear filters'
            onClick={handleFilterClear}
          >
            CLEAR FILTERS
          </button>
        </div>
      )}
    </div>
  );
};

export default CategoryButtonContainer;
