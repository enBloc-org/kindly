'use client';

import Search from '@/components/form/Search';
import searchItem from '@/utils/supabase/searchByName';
import { useState } from 'react';
export default function SearchItem() {
  const [searchResults, setSearchResults] = useState([]);
  // const [categories, setCategories] = useState([]);

  async function handleSearch(term: string) {
    const items = await searchItem(term);

    // await Promise.all(
    //   items.map(async (item) => {
    //     item.image = await fetchImage(item.image_id);
    //   })
    // );

    setSearchResults(items);
  }

  console.log(searchResults);
  // async function fetchCategoriesData() {
  //   const categoriesData = await fetchCategories();
  //   setCategories(categoriesData);
  // }

  // useEffect(() => {
  //   fetchCategoriesData();
  // }, []);

  return (
    <>
      <Search onSearch={handleSearch} />{' '}
      {/* {searchResults.length === 0 && (
        <div className='grid grid-cols-2 gap-4'>
          {categories.map((category) => (
            <div
              key={category.category_name}
              className='bg-white shadow-md rounded-md p-4'
            >
              <Link href={`/products/${category.category_name}`}>
                <h1 className='text-2xl font-bold'>{category.category_name}</h1>
              </Link>
            </div>
          ))}
        </div>
      )} */}
      <div className='mt-4'>
        {searchResults.map((result) => (
          <div
            className='bg-white p-2 border rounded shadow mb-2'
            key={result.id}
          >
            <img src='tobe added' alt={} className='w-32 h-32 object-contain' />
          </div>
        ))}
      </div>
    </>
  );
}
