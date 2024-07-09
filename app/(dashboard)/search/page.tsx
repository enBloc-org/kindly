'use client';
import ItemDisplayContainer from '@/components/search/ItemDisplayContainer';
import { SearchBar } from '@/components/search/SearchBar';
import QuickBrowse from '@/components/search/filter/QuickBrowse';
import searchItemsByName from '@/supabase/models/searchItemsByName';
import selectItemsByCreatedAt from '@/supabase/models/selectingItems/selectItemsByCreatedAt';
import { SearchParamsType } from '@/types/searchPageTypes';
import { PartialItem } from '@/types/supabaseTypes';
import { useEffect, useState } from 'react';
import { useDebouncedCallback } from 'use-debounce';

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

  const fetchSearchResults = async () => {
    setIsLoading(true);
    let data: PartialItem[] = [];
    switch (true) {
      // case !!searchParams.query &&
      //   !!searchParams.category &&
      //   !!searchParams.subcategory:
      //   data = await searchItemsByQueryCategorySubcategory(
      //     searchParams.query,
      //     searchParams.category,
      //     searchParams.subcategory,
      //     searchParams.limit,
      //     searchParams.cursor
      //   );
      //   break;
      // case !!searchParams.query && !!searchParams.category:
      //   data = await searchItemsByQueryAndCategory(
      //     searchParams.query,
      //     searchParams.category,
      //     searchParams.limit,
      //     searchParams.cursor
      //   );
      //   break;
      case !!searchParams.query:
        data = await searchItemsByName(
          searchParams.query,
          searchParams.limit,
          searchParams.cursor
        );
        break;
      default:
        data = await selectItemsByCreatedAt(
          searchParams.cursor,
          searchParams.limit
        );
        break;
    }
    setSearchResults(data);
    setIsLoading(false);
  };

  const debouncedFetchSearchResults = useDebouncedCallback(
    fetchSearchResults,
    500
  );

  useEffect(() => {
    debouncedFetchSearchResults();
  }, [searchParams, debouncedFetchSearchResults]);

  return (
    <div className='mt-8'>
      <SearchBar
        searchParams={searchParams}
        setSearchParams={setSearchParams}
      />
      <QuickBrowse />
      <ItemDisplayContainer
        searchResults={searchResults}
        isLoading={isLoading}
      />
    </div>
  );
}
