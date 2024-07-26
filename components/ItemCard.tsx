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
  item_type,
  postcode,
  postable,
  id,
  reserved,
}) => {
  return (
    <div className='card'>
      <Link href={`/item/${id}`} className=''>
        <div className='flex flex-row justify-between align-middle'>
          <h2 className='p-4  font-semibold'>{item_name}</h2>
          {reserved && <p className='reserved'>Reserved</p>}
        </div>
        <div className='flex gap-3'>
          <div className='relative h-36 w-48 md:h-52 md:w-64'>
            <Image
              src={imageSrc ? `${imageSrc}` : '/default-item-img.png'}
              alt={`Image of ${item_name}`}
              fill
              sizes='(max-width: 768px) 100vw, 50vw'
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
