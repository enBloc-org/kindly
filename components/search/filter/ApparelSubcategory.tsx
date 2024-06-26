'use client';
import BoyIcon from '../../icons/BoyIcon';
import GirlIcon from '../../icons/GirlIcon';
import ManIcon from '../../icons/ManIcon';
import WomanIcon from '../../icons/WomanIcon';
import CategoryButton from './CategoryButton';

type CategoryProp = {
  setSubcategory: React.Dispatch<React.SetStateAction<string>>;
  subcategory: string;
};

const ApparelSubcategory: React.FC<CategoryProp> = ({
  setSubcategory,
  subcategory,
}) => {
  const handleButtonClick = (value: string) => {
    if (subcategory === value) {
      setSubcategory('');
    } else {
      setSubcategory(value);
    }
  };

  return (
    <div className='mt-10 flex justify-center gap-2 text-sm md:gap-10'>
      <CategoryButton
        handleButtonClick={handleButtonClick}
        category={subcategory}
        option='women'
      >
        Women
        <WomanIcon subcategory={subcategory} />
      </CategoryButton>
      <CategoryButton
        handleButtonClick={handleButtonClick}
        category={subcategory}
        option='men'
      >
        Men
        <ManIcon subcategory={subcategory} />
      </CategoryButton>
      <CategoryButton
        handleButtonClick={handleButtonClick}
        category={subcategory}
        option='girls'
      >
        Girls
        <GirlIcon subcategory={subcategory} />
      </CategoryButton>
      <CategoryButton
        handleButtonClick={handleButtonClick}
        category={subcategory}
        option='boys'
      >
        Boys
        <BoyIcon subcategory={subcategory} />
      </CategoryButton>
    </div>
  );
};

export default ApparelSubcategory;
