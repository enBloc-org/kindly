'use client';
import { useEffect, useState } from 'react';
import { SearchParamsType } from '@/types/searchPageTypes';
import { PartialItem } from '@/types/supabaseTypes';

//Components
import { SearchBar } from '@/components/search/SearchBar';
import FilterOptions from '@/components/search/filter/FilterOptions';
import ItemCard from '../ItemCard';

//Utils
import searchItems from '@/supabase/models/filtering-items/searchItems';

const initialSearchParams: SearchParamsType = {
  query: '',
  category: '',
  subcategory: '',
  limit: 30,
  cursor: '',
};

export default function SearchPageDisplay() {
  const [searchParams, setSearchParams] = useState(initialSearchParams);
  const [searchResults, setSearchResults] = useState<PartialItem[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [hasFilters, setHasFilters] = useState(false);

  const fetchSearchResults = async () => {
    setIsLoading(true);
    let data: PartialItem[] = [];
    data = await searchItems(searchParams);
    setSearchResults(data);
    setIsLoading(false);
  };

  useEffect(() => {
    fetchSearchResults();
  }, [hasFilters]);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    fetchSearchResults();
  };

  return (
    <div className='mb-28 mt-8'>
      <div className='m-auto flex max-w-[450px] flex-wrap justify-center gap-3'>
        <SearchBar
          searchParams={searchParams}
          setSearchParams={setSearchParams}
          handleSubmit={handleSubmit}
        />
        <FilterOptions
          searchParams={searchParams}
          setSearchParams={setSearchParams}
          setHasFilters={setHasFilters}
        />
      </div>
      {isLoading ? (
        <div className='mt-8 flex justify-center'>
          <h2>Loading....</h2>
        </div>
      ) : (
        <div className='lg-px-20 m-auto mt-5 lg:w-5/6'>
          <div className='mt-10 flex flex-col items-center gap-5'>
            {searchResults.length > 0 ? (
              searchResults.map((result) => (
                <ItemCard
                  key={result.id}
                  imageSrc={result.imageSrc!}
                  item_name={result.item_name!}
                  postcode={result.postcode!}
                  size={result.size!}
                  postable={result.postable!}
                  collectible={result.collectible!}
                  postage_covered={result.postage_covered!}
                  id={result.id!}
                  created_at={result.created_at!}
                  donated_by={result.donated_by!}
                />
              ))
            ) : (
              <p className='text-center'>No results found.</p>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
