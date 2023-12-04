import GirlIcon from '../icons/GirlIcon';
import WomanIcon from '../icons/WomanIcon';
import CategoryButton from './CategoryButton';

type CategoryProp = {
  setSubcategory: React.Dispatch<React.SetStateAction<string>>;
  subcategory: string;
};
const BooksSubcatergory: React.FC<CategoryProp> = ({
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
    <div className='flex justify-center gap-2 mt-10 text-sm'>
      <CategoryButton
        handleButtonClick={handleButtonClick}
        category={subcategory}
        option='women'
      >
        Adult:
        <WomanIcon subcategory={subcategory} />
      </CategoryButton>
      <CategoryButton
        handleButtonClick={handleButtonClick}
        category={subcategory}
        option='girls'
      >
        Children:
        <GirlIcon subcategory={subcategory} />
      </CategoryButton>
    </div>
  );
};

export default BooksSubcatergory;
