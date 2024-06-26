import React from 'react';
import { PartialItem } from '@/types/supabaseTypes';
import ItemCard from '../ItemCard';

type ItemDisplayContainerProps = {
  query: string;
  category: string;
  subcategory: string;
  searchResults: PartialItem[] | [];
};

const ItemDisplayContainer: React.FC<ItemDisplayContainerProps> = ({
  query,
  category,
  subcategory,
  searchResults,
}) => {
  return (
    <div className='lg-px-20 m-auto mt-5 lg:w-5/6'>
      <h2 className='mx-5 font-semibold italic'>
        Search for:{' '}
        <span className='font-normal'>
          {query.length > 0 ? query : ''}
          {category.length > 0 ? category : ''}
          {subcategory.length > 0 ? subcategory : ''}
        </span>
      </h2>
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
