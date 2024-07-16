import GirlIcon from '../../icons/GirlIcon';
import WomanIcon from '../../icons/WomanIcon';
import CategoryButton from './CategoryButton';

type CategoryProp = {
  subcategory: string;
  handleButtonClick: (value: string) => void;
};
const BooksSubcategory: React.FC<CategoryProp> = ({
  subcategory,
  handleButtonClick,
}) => {
  return (
    <div className='mt-10 flex justify-center gap-2 text-sm'>
      <CategoryButton
        handleButtonClick={handleButtonClick}
        category={subcategory}
        option='adults'
      >
        Adults
        <WomanIcon subcategory={subcategory} />
      </CategoryButton>
      <CategoryButton
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
