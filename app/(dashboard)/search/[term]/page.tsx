import ItemCard from '@/components/ItemCard';
import BackButton from '@/components/buttons/BackButton';
import searchByName from '@/utils/supabase/searchByName';

type Params = {
  term: string;
};

const SearchResulsPage = async ({ params }: { params: Params }) => {
  const searchResults = await searchByName(params.term);

  return (
    <div>
      <BackButton />
      <h2 className='m-5 font-semibold italic'>
        Search for: <span className='font-normal'>{params.term}</span>
      </h2>
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
  );
};

export default SearchResulsPage;
