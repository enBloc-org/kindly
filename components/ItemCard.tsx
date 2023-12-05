import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import ItemDetails from './ItemDetails';

type ItemCardPropType = {
  imageSrc?: string;
  item_name?: string;
  condition?: string;
  item_type?: string;
  postcode?: string;
  postable?: boolean;
  itemId?: number;
};

const ItemCard: React.FC<ItemCardPropType> = ({
  imageSrc,
  item_name,
  condition,
  item_type,
  postcode,
  postable,
  itemId,
}) => {
  return (
    <Link
      href={`/item/${itemId}`}
      className='bg-white shadow-sm relative px-3 mx-3 min-h-fit rounded-lg lg:text-lg'
    >
      <h2 className='font-light p-4'>{item_name}</h2>
      <div className='flex gap-3'>
        <div className='pb-5 relative w-full h-full'>
          <Image
            src={`${imageSrc}`}
            alt={`Image of ${item_name}`}
            layout='fill'
            objectFit='cover'
            sizes='(max-width: 600px) 100vw, 50vw'
          />
        </div>
        <ItemDetails
          condition={condition}
          item_type={item_type}
          postcode={postcode}
          postable={postable}
          fontSize='text-xs'
        />
      </div>
    </Link>
  );
};

export default ItemCard;
