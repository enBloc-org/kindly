import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

//Types
import { PartialItem } from '@/types/supabaseTypes';

//Components
import ItemDetails from './ItemDetails';

const ItemCard: React.FC<PartialItem> = ({
  imageSrc,
  item_name,
  condition,
  postcode,
  size,
  postage_covered,
  id,
  is_reserved,
  given_away_to,
}) => {
  return (
    <Link href={`/item/${id}`}>
      <div
        className='card relative m-auto mt-8
        flex h-[400px] w-[176px] flex-col gap-3 sm:w-[200px] md:h-[450px] md:w-[256px]'
      >
        {given_away_to ? (
          <div
            className='absolute left-0 right-0 top-14 z-10 m-auto w-[175px] rounded-lg border border-primaryGreen
            bg-background p-2 text-center opacity-70 md:w-[200px]'
          >
            <p className='text-lg text-primaryGreen'>GIVEN AWAY</p>
          </div>
        ) : is_reserved ? (
          <div
            className='absolute left-0 right-0 top-14 z-10 m-auto w-[175px] rounded-lg border border-primaryGreen
            bg-background p-2 text-center opacity-70 md:w-[200px]'
          >
            <p className='text-lg text-primaryGreen'>RESERVED</p>
          </div>
        ) : null}
        <div className='relative h-[176px] w-[176px] sm:w-[200px] md:h-52 md:w-64'>
          <Image
            src={imageSrc ? `${imageSrc}` : '/default-item-img.png'}
            alt={`Image of ${item_name}`}
            fill
            sizes='(max-width: 768px) 100vw, 50vw'
          />
        </div>
        <h2 className='p-4 text-center font-semibold md:text-xl'>
          {item_name}
        </h2>
        <ItemDetails
          condition={condition}
          size={size}
          postcode={postcode}
          postage_covered={postage_covered}
          fontSize='text-md'
        />
      </div>
    </Link>
  );
};

export default ItemCard;
