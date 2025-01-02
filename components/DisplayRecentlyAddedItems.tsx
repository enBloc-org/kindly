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

  return !loading ? (
    storeRecentItems.length > 0 ? (
      <ul className='flex flex-wrap items-center justify-center gap-10'>
        {storeRecentItems.map((item) => (
          <li key={item.id}>
            <Link href={`/item/${item.id}`}>
              <div
                data-testid='item-div'
                className='relative h-36 w-28 shadow-md'
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
    ) : (
      <p className='text-center'>No added items</p>
    )
  ) : (
    <p className='text-center'>Loading...</p>
  );
}
