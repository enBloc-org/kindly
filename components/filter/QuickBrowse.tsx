'use client';
import { useState } from 'react';
import ApparelSubcategory from './ApparelSubcategory';
import CategoryButton from './CategoryButton';
import { useRouter } from 'next/navigation';
import ShirtIcon from '../icons/ShirtIcon';
import ShoeIcon from '../icons/ShoeIcon';
import ToyIcon from '../icons/ToyIcon';
import BookIcon from '../icons/BookIcon';
import HomeIcon from '../icons/HomeIcon';
import BooksSubcatergory from './BooksSubcatergory';

export type IconPropType = {
  category?: string;
  subcategory?: string;
};

const QuickBrowse = () => {
  const [category, setCategory] = useState('');
  const [subcategory, setSubcategory] = useState('');
  const router = useRouter();

  const handleButtonClick = (value: string) => {
    if (category === value) {
      setCategory('');
    } else {
      setCategory(value);
    }
  };

  const onSearchHandler = () => {
    router.push(
      `/search/results/?category=${category}&subcategory=${subcategory}`
    );
    setCategory('');
    setSubcategory('');
  };

  return (
    <div className='max-w-xl m-auto'>
      <h1 className='font-semibold italic ml-4 mt-16'>Quick search:</h1>
      <div className='flex justify-between gap-1 px-2 mt-10 text-sm'>
        <CategoryButton
          handleButtonClick={handleButtonClick}
          category={category}
          option='clothing'
        >
          Clothing
          <ShirtIcon category={category} />
        </CategoryButton>
        <CategoryButton
          handleButtonClick={handleButtonClick}
          category={category}
          option='shoes'
        >
          Shoes
          <ShoeIcon category={category} />
        </CategoryButton>

        <CategoryButton
          handleButtonClick={handleButtonClick}
          category={category}
          option='toys'
        >
          Toys
          <ToyIcon category={category} />
        </CategoryButton>
        <CategoryButton
          handleButtonClick={handleButtonClick}
          category={category}
          option='books'
        >
          Books
          <BookIcon category={category} />
        </CategoryButton>
        <CategoryButton
          handleButtonClick={handleButtonClick}
          category={category}
          option='household'
        >
          Home
          <HomeIcon category={category} />
        </CategoryButton>
      </div>
      {['shoes', 'clothing'].includes(category) && (
        <ApparelSubcategory
          setSubcategory={setSubcategory}
          subcategory={subcategory}
        />
      )}
      {category === 'books' && (
        <BooksSubcatergory
          subcategory={subcategory}
          setSubcategory={setSubcategory}
        />
      )}

      {category.length > 0 && (
        <div className='flex justify-center mt-10'>
          <button
            className='button button-rounded'
            type='button'
            aria-label='See results'
            onClick={onSearchHandler}
          >
            SEE RESULTS
          </button>
        </div>
      )}
    </div>
  );
};

export default QuickBrowse;
