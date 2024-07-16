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
  reserved?: boolean;
};

const ItemCard: React.FC<ItemCardPropType> = ({
  imageSrc,
  item_name,
  condition,
  item_type,
  postcode,
  postable,
  itemId,
  reserved,
}) => {
  console.log('Reserved:', reserved);
  return (
    <div className='card'>
      <Link href={`/item/${itemId}`} className=''>
        <div className='flex flex-row justify-between align-middle'>
          <h2 className='p-4  font-semibold'>{item_name}</h2>
          {reserved && <p className='reserved'>Reserved</p>}
        </div>
        <div className='flex gap-3'>
          <div className='relative h-36 w-48 md:h-52 md:w-64'>
            <Image
              src={imageSrc ? `${imageSrc}` : '/default-item-img.png'}
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
