'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import { item } from '@/types/supabaseTypes';
import getRecentItems from '@/supabase/models/getRecentItems';

export default function DisplayRecentlyAddedItems() {
  const [storeRecentItems, setStoreRecentItems] = useState<item[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchRecentItems = async () => {
      try {
        setLoading(true);
        const fetchedRecentItems = await getRecentItems();
        setStoreRecentItems(fetchedRecentItems);
        setLoading(false);
      } catch (error) {
        setLoading(false);
        console.log('Error while fetching recently added items: ', error);
        throw error;
      }
    };
    fetchRecentItems();
  }, []);

  return (
    <div className='mx-auto flex w-[90%] justify-center lg:max-w-[1080px]'>
      <div className='my-[40px] flex w-full flex-col items-center lg:my-[96px]'>
        <div className='mb-16 flex w-full flex-col items-center text-center'>
          <h2 className='mb-6 px-10 text-[24px] font-[600] text-gray-800 md:text-[36px] lg:text-[48px] lg:font-medium'>
            Recently Added
          </h2>
        </div>
        {!loading ? (
          storeRecentItems.length > 0 ? (
            <>
              <ul className='flex h-[346px] w-full items-center justify-between gap-4 '>
                {storeRecentItems.map((item) => (
                  <li key={item.id} className='flex-shrink-0'>
                    <Link href={`/item/${item.id}`}>
                      <div
                        data-testid='item-div'
                        className='relative h-[346px] w-[346px] shadow-md'
                      >
                        <Image
                          alt={`Image of ${item.item_name}`}
                          src={item.imageSrc}
                          fill={true}
                          objectFit='cover'
                          className='rounded-lg'
                        />
                      </div>
                    </Link>
                  </li>
                ))}
              </ul>
            </>
          ) : (
            <p className='text-center'>No added items</p>
          )
        ) : (
          <p className='text-center'>Loading...</p>
        )}
      </div>
    </div>
  );
}
