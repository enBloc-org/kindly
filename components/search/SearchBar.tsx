'use client';

import { SearchParamsType } from '@/types/searchPageTypes';
import { Dispatch, SetStateAction } from 'react';

type SearchBarPropType = {
  searchParams: SearchParamsType;
  setSearchParams: Dispatch<SetStateAction<SearchParamsType>>;
};

export const SearchBar: React.FC<SearchBarPropType> = ({
  setSearchParams,
  searchParams,
}) => {
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchParams((prevState) => ({
      ...prevState,
      query: e.target.value,
    }));
  };

  return (
    <div className='flex items-center justify-center'>
      <input
        value={searchParams.query}
        className='min-w-[300px] rounded-md border border-gray-300 p-2 shadow-sm'
        type='text'
        placeholder='Type to search an item...'
        required
        onChange={handleInputChange}
      />
    </div>
  );
};
