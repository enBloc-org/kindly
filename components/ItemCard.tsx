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
    <div className='bg-white shadow-sm relative px-8 pb-5 mx-3 rounded-lg lg:text-lg'>
      <Link href={`/item/${itemId}`} className=''>
        <h2 className='font-light p-4'>{item_name}</h2>
        <div className='flex gap-3'>
          <div className='relative w-48 h-36 shadow-md md:w-64 md:h-52'>
            <Image
              src={`${imageSrc}`}
              alt={`Image of ${item_name}`}
              layout='fill'
              objectFit='cover'
            />
          </div>
          <ItemDetails
            condition={condition}
            item_type={item_type}
            postcode={postcode}
            postable={postable}
            fontSize='text-sm'
          />
        </div>
      </Link>
    </div>
  );
};

export default ItemCard;
