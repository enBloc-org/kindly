import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

//Types
import { item } from '@/types/supabaseTypes';
import startNewConversation from '@/supabase/models/messaging/startNewConversation';

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
    | 'created_at'
    | 'donated_by'
  > & { userId: string }
> = ({
  id,
  item_name,
  size,
  postcode,
  imageSrc,
  postable,
  collectible,
  postage_covered,
  created_at,
  donated_by,
  userId,
}) => {
  const [message, setMessage] = useState<string>('');

  const displayDeliveryOptions = () => {
    switch (true) {
      case postable && !collectible && !postage_covered:
        return 'Posting';
      case collectible && !postable && !postage_covered:
        return 'Pick-up only';
      case postage_covered && !collectible && postable:
        return 'Posting (postage covered)';
      case postable && collectible && !postage_covered:
        return 'Pick-up or posting';
      case postable && collectible && postage_covered:
        return 'Pick-up or posting (postage covered)';
    }
  };

  const messageButtonHandler = async () => {
    try {
      await startNewConversation(userId, donated_by, id);
    } catch (error) {
      setMessage('Something went wrong. Please try again later.');
      console.error(error);
    }
  };

  return (
    <Link href={`/item/${id}`}>
      <div
        className='card m-auto mt-8
        flex h-[568px] w-[350px] flex-col justify-between p-0 sm:w-[200px] md:h-[450px] md:w-[256px]'
      >
        <div className='relative h-[334.53px] w-[350px] sm:w-[200px] md:h-52 md:w-64'>
          <Image
            src={imageSrc ? `${imageSrc}` : '/default-item-img.png'}
            alt={`Image of ${item_name}`}
            fill
            sizes='(max-width: 768px) 100vw, 50vw'
          />
        </div>
        <div className='flex h-[137px] w-[350px] flex-col justify-between text-start'>
          <p className='text-sm text-primaryGray'>
            Date added:{' '}
            <span>
              {created_at.slice(0, 10).split('-').toReversed().join('.')}
            </span>
          </p>
          <p className='text-[2rem]'>
            <b>{item_name}</b>
          </p>
          <p className='text-sm'>
            <b>Size: </b>
            {size}
          </p>
          <p className='text-sm'>
            <b>Postcode: </b>
            {postcode}
          </p>
          <p className='text-sm'>
            <b>Delivery Preferences: </b>
            <span className='font-semibold text-primaryOrange'>
              {displayDeliveryOptions()}
            </span>
          </p>
        </div>
        {message.length > 0 && <p className='error-message'>{message}</p>}
        <button className='button' onClick={messageButtonHandler}>
          MESSAGE
        </button>
      </div>
    </Link>
  );
};

export default ItemCard;
