import React from 'react';

//Types
import { PartialItem } from '@/types/supabaseTypes';

//Components
import ItemCard from '../ItemCard';

type ItemDisplayContainerProps = {
  searchResults: PartialItem[];
  isLoading: boolean;
};

const ItemDisplayContainer: React.FC<ItemDisplayContainerProps> = ({
  searchResults,
  isLoading,
}) => {
  if (isLoading) {
    return (
      <div className='mt-8 flex justify-center'>
        <h2>Loading....</h2>
      </div>
    );
  }
  return (
    <div
      className='m-auto mt-10 grid grid-cols-2 px-1
        sm:max-w-[825px] sm:grid-cols-3 lg:max-w-[1140px] lg:grid-cols-4 lg:gap-10'
    >
      {searchResults.length > 0 ? (
        searchResults.map((result) => (
          <ItemCard
            key={result.id}
            imageSrc={result.imageSrc}
            item_name={result.item_name}
            condition={result.condition}
            size={result.size}
            postcode={result.postcode}
            postage_covered={result.postage_covered}
            id={result.id}
          />
        ))
      ) : (
        <p className='text-center'>No results found.</p>
      )}
    </div>
  );
};

export default ItemDisplayContainer;
