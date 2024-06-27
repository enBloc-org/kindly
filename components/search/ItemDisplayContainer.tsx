import React from 'react';
import { PartialItem } from '@/types/supabaseTypes';
import ItemCard from '../ItemCard';

type ItemDisplayContainerProps = {
  searchResults: PartialItem[] | [];
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
    <div className='lg-px-20 m-auto mt-5 lg:w-5/6'>
      <div className='mt-10 flex flex-col items-center gap-5'>
        {searchResults.length > 0 ? (
          searchResults.map((result) => (
            <ItemCard
              key={result.id}
              imageSrc={result.imageSrc}
              item_name={result.item_name}
              condition={result.condition}
              item_type={result.item_type}
              postcode={result.postcode}
              postable={result.postable}
              itemId={result.id}
            />
          ))
        ) : (
          <p className='text-center'>No results found.</p>
        )}
      </div>
    </div>
  );
};

export default ItemDisplayContainer;
