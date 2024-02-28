import ItemCard from '@/components/ItemCard';
import BackButton from '@/components/buttons/BackButton';
import { getItems } from '@/utils/supabase/getItems';
import filterItems from '@/utils/supabase/filterItems';
import searchByName from '@/utils/supabase/searchByName';
import { PartialItem } from '@/utils/supabase/types';

type ParamsType = {
  query: string;
  category: string;
  subcategory: string;
};

const SearchResulsPage = async ({
  searchParams,
}: {
  searchParams: ParamsType;
}) => {
  let searchResults: PartialItem[] | null = [];

  if (Object.keys(searchParams).some((key) => key === 'query')) {
    searchResults = await searchByName(searchParams.query);
  } else {
    searchResults = await getItems(
      'items',
      '*',
      'item_type',
      searchParams.category
    );
    if (!searchResults) {
      return 'supabase request fialed';
    }
    if (searchParams.subcategory && searchResults) {
      searchResults = filterItems(searchResults, searchParams.subcategory);
    }
  }

  return (
    <div className='lg-px-20 m-auto mt-5 lg:w-5/6'>
      <BackButton />
      <h2 className='mx-5 font-semibold italic'>
        Search for:{' '}
        <span className='font-normal'>
          {searchParams.query && searchParams.query}
          {searchParams.category && searchParams.category}
          {searchParams.subcategory && ' & ' + searchParams.subcategory}
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

export default SearchResulsPage;
