'use client';
import ItemDisplayContainer from '@/components/search/ItemDisplayContainer';
import { SearchBar } from '@/components/search/SearchBar';
import QuickBrowse from '@/components/search/filter/QuickBrowse';
import filterItems from '@/supabase/models/filterItems';
import { getItems } from '@/supabase/models/getItems';
import searchItemsByName from '@/supabase/models/searchItemsByName';
import { SearchParamsType } from '@/types/searchPageTypes';
import { PartialItem } from '@/types/supabaseTypes';
import { useEffect, useState } from 'react';

const initialSearchParams = {
  query: undefined,
  category: undefined,
  subcategory: undefined,
};

export default function SearchItemPage() {
  const [searchParams, setSearchParams] =
    useState<SearchParamsType>(initialSearchParams);
  const [searchResults, setSearchResults] = useState<PartialItem[]>([]);

  useEffect(() => {
    const fetchSearchResults = async () => {
      console.log(searchParams);
      try {
        let data: PartialItem[] | null = [];
        if (searchParams.query !== undefined) {
          data = await searchItemsByName(searchParams.query);
        } else {
          data = await getItems(
            'items',
            '*',
            'item_type',
            searchParams.category
          );
          if (!data) {
            return 'supabase request fialed';
          }
          if (searchParams.subcategory && data) {
            data = filterItems(data, searchParams.subcategory);
          }
        }
        setSearchResults(data);
      } catch (error) {}
    };
    fetchSearchResults();
  }, [searchParams]);

  return (
    <div className='mt-8'>
      <SearchBar
        searchParams={searchParams}
        setSearchParams={setSearchParams}
      />
      <QuickBrowse />
      <ItemDisplayContainer
        query=''
        category=''
        subcategory=''
        searchResults={searchResults}
      />
    </div>
  );
}
