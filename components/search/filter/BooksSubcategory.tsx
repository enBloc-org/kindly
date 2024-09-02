//Types
import { BooksSubcategoryType } from '@/types/searchPageTypes';

//Components
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
    <div className='mt-10 flex justify-center gap-6 text-sm'>
      <CategoryButton<BooksSubcategoryType>
        handleButtonClick={handleButtonClick}
        category={subcategory}
        option='adults'
      >
        <WomanIcon subcategory={subcategory} />
        Adults
      </CategoryButton>
      <CategoryButton<BooksSubcategoryType>
        handleButtonClick={handleButtonClick}
        category={subcategory}
        option='children'
      >
        <GirlIcon subcategory={subcategory} />
        Children
      </CategoryButton>
    </div>
  );
};

export default BooksSubcategory;
