import { BooksSubcategoryType } from '@/types/searchPageTypes';
import GirlIcon from '../../icons/GirlIcon';
import WomanIcon from '../../icons/WomanIcon';
import CategoryButton from './CategoryButton';

type BookSubcategoryProp = {
  subcategory: BooksSubcategoryType;
  handleButtonClick: (value: BooksSubcategoryType) => void;
};
const BooksSubcategory: React.FC<BookSubcategoryProp> = ({
  subcategory,
  handleButtonClick,
}) => {
  return (
    <div className='mt-10 flex justify-center gap-2 text-sm'>
      <CategoryButton<BooksSubcategoryType>
        handleButtonClick={handleButtonClick}
        category={subcategory}
        option='adults'
      >
        Adults
        <WomanIcon subcategory={subcategory} />
      </CategoryButton>
      <CategoryButton<BooksSubcategoryType>
        handleButtonClick={handleButtonClick}
        category={subcategory}
        option='children'
      >
        Children
        <GirlIcon subcategory={subcategory} />
      </CategoryButton>
    </div>
  );
};

export default BooksSubcategory;
