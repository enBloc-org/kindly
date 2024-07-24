'use client';
import { useEffect, useState } from 'react';
import { SearchParamsType } from '@/types/searchPageTypes';
import { PartialItem } from '@/types/supabaseTypes';

//Components
import ItemDisplayContainer from '@/components/search/ItemDisplayContainer';
import { SearchBar } from '@/components/search/SearchBar';
import FilterOptions from '@/components/search/filter/FilterOptions';

//Utils
import searchItems from '@/supabase/models/filtering-items/searchItems';

const initialSearchParams = {
  query: '',
  category: '',
  subcategory: '',
  limit: 10,
  cursor: '',
};

export default function SearchItemPage() {
  const [searchParams, setSearchParams] =
    useState<SearchParamsType>(initialSearchParams);
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
      <ItemDisplayContainer
        searchResults={searchResults}
        isLoading={isLoading}
      />
    </div>
  );
}
