import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

//Types
import { item } from '@/types/supabaseTypes';

const ItemCard: React.FC<
  Pick<
    item,
    | 'id'
    | 'item_name'
    | 'size'
    | 'postcode'
    | 'imageSrc'
    | 'postable'
    | 'collectible'
    | 'postage_covered'
  >
> = ({
  id,
  item_name,
  size,
  postcode,
  imageSrc,
  postable,
  collectible,
  postage_covered,
}) => {
  const displayDeliveryOptions = () => {
    switch (true) {
      case postable && !collectible && !postage_covered:
        return 'Posting';
        break;
      case collectible && !postable && !postage_covered:
        return 'Pick-up only';
        break;
      case postage_covered && !collectible:
        return 'Posting (postage covered)';
        break;
      case postable && collectible && !postage_covered:
        return 'Pick-up or posting';
        break;
      case postable && collectible && postage_covered:
        return 'Pick-up or posting (postage covered)';
        break;
    }
  };

  return (
    <Link href={`/item/${id}`}>
      <div
        className='card relative m-auto mt-8
        flex h-[400px] w-[176px] flex-col gap-3 sm:w-[200px] md:h-[450px] md:w-[256px]'
      >
        <div className='relative h-[176px] w-[176px] sm:w-[200px] md:h-52 md:w-64'>
          <Image
            src={imageSrc ? `${imageSrc}` : '/default-item-img.png'}
            alt={`Image of ${item_name}`}
            fill
            sizes='(max-width: 768px) 100vw, 50vw'
          />
        </div>
        <div className='flex flex-col text-start'>
          <h2 className='text-xl'>
            <b>{item_name}</b>
          </h2>
          <p>
            <b>Size:</b>
            {size}
          </p>
          <p>
            <b>Postcode:</b>
            {postcode}
          </p>
          <p>
            <b>Delivery Preferences:</b>
            <span className='text-primaryOrange'>
              {displayDeliveryOptions()}
            </span>
          </p>
        </div>
      </div>
    </Link>
  );
};

export default ItemCard;
