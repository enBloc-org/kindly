'use client';

import Link from 'next/link';
import Image from 'next/image';
import { item } from '@/types/supabaseTypes';
import React from 'react';

export default function DisplayRecentlyAddedItems({
  recentItems,
}: {
  recentItems: item[];
}) {
  return (
    recentItems.length > 0 && (
      <ul className='flex flex-wrap items-center justify-center gap-10'>
        {recentItems.map((item) => (
          <li key={item.id}>
            <Link href={`/item/${item.id}`}>
              <div
                data-testid='item-div'
                className='relative h-36 w-28 overflow-hidden rounded-lg shadow-md'
              >
                <Image
                  alt={`Image of ${item.item_name}`}
                  src={item.imageSrc}
                  fill={true}
                  objectFit='cover'
                />
              </div>
            </Link>
          </li>
        ))}
      </ul>
    )
  );
}
