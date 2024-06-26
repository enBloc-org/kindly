import GirlIcon from '../../icons/GirlIcon';
import WomanIcon from '../../icons/WomanIcon';
import CategoryButton from './CategoryButton';

type CategoryProp = {
  setSubcategory: React.Dispatch<React.SetStateAction<string>>;
  subcategory: string;
};
const BooksSubcategory: React.FC<CategoryProp> = ({
  subcategory,
  setSubcategory,
}) => {
  const handleButtonClick = (value: string) => {
    if (subcategory === value) {
      setSubcategory('');
    } else {
      setSubcategory(value);
    }
  };

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
