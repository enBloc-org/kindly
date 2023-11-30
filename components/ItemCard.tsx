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
    <Link href={`/item/${itemId}`}>
      <div className='bg-white shadow-sm px-3 mx-3 rounded-lg max-w-40'>
        <h2 className='font-light p-3'>{item_name}</h2>
        <div className='flex gap-3'>
          <div className='pb-5'>
            <Image
              src={`${imageSrc}`}
              alt={`${item_name}`}
              width={350}
              height={200}
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
      </div>
    </Link>
  );
};

export default ItemCard;
