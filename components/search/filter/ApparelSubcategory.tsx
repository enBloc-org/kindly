'use client';
import { ApparelSubcategoryType } from '@/types/searchPageTypes';
import BoyIcon from '../../icons/BoyIcon';
import GirlIcon from '../../icons/GirlIcon';
import ManIcon from '../../icons/ManIcon';
import WomanIcon from '../../icons/WomanIcon';
import CategoryButton from './CategoryButton';

type ApparelSubcategoryProp = {
  subcategory: ApparelSubcategoryType;
  handleButtonClick: (value: ApparelSubcategoryType) => void;
};

const ApparelSubcategory: React.FC<ApparelSubcategoryProp> = ({
  subcategory,
  handleButtonClick,
}) => {
  return (
    <div className='mt-10 flex justify-center gap-2 text-sm md:gap-10'>
      <CategoryButton<ApparelSubcategoryType>
        handleButtonClick={handleButtonClick}
        category={subcategory}
        option='women'
      >
        <WomanIcon subcategory={subcategory} />
        Women
      </CategoryButton>
      <CategoryButton<ApparelSubcategoryType>
        handleButtonClick={handleButtonClick}
        category={subcategory}
        option='men'
      >
        <ManIcon subcategory={subcategory} />
        Men
      </CategoryButton>
      <CategoryButton<ApparelSubcategoryType>
        handleButtonClick={handleButtonClick}
        category={subcategory}
        option='girls'
      >
        Girls
        <GirlIcon subcategory={subcategory} />
      </CategoryButton>
      <CategoryButton<ApparelSubcategoryType>
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
