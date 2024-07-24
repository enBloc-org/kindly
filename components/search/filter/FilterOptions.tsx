'use client';
import { Dispatch, useState } from 'react';
import { SearchParamsType } from '@/types/searchPageTypes';
import CategoryButtonContainer from './CategoryButtonContainer.';
import FilterIcon from '@/components/icons/FilterIcon';

type FilterOptionsProps = {
  searchParams: SearchParamsType;
  setSearchParams: Dispatch<React.SetStateAction<SearchParamsType>>;
  setHasFilters: Dispatch<React.SetStateAction<boolean>>;
};

const FilterOptions: React.FC<FilterOptionsProps> = ({
  searchParams,
  setSearchParams,
  setHasFilters,
}) => {
  const [filtersOpen, setFiltersOpen] = useState(false);
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

  const handleFilterClear = () => {
    setSearchParams((prev) => ({
      ...prev,
      category: '',
      subcategory: '',
    }));
    setHasFilters(false);
  };

  const handleFilterApply = () => {
    setHasFilters(true);
  };

  return (
    <>
      <button
        className='mt-2 px-4'
        onClick={() => setFiltersOpen((prev) => !prev)}
      >
        <FilterIcon width={30} height={30} active={filtersOpen} />
      </button>
      {filtersOpen && (
        <CategoryButtonContainer
          searchParams={searchParams}
          handleCategoryClick={handleCategoryClick}
          handleSubcategoryClick={handleSubcategoryClick}
          handleFilterApply={handleFilterApply}
          handleFilterClear={handleFilterClear}
        />
      )}
    </>
  );
};

export default FilterOptions;
