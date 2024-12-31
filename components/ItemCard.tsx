import React, { useState } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import newClient from '@/supabase/utils/newClient';

//Types
import { item } from '@/types/supabaseTypes';
import startNewConversation from '@/supabase/models/messaging/startNewConversation';
import { useConversationContext } from '@/context/conversationContext';
import Link from 'next/link';

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
  created_at,
  donated_by,
}) => {
  const router = useRouter();
  const [message, setMessage] = useState<string>('');
  const { dispatch } = useConversationContext();
  const supabase = newClient();

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

  const messageButtonHandler = async (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    event.stopPropagation();
    const {
      data: { session },
    } = await supabase.auth.getSession();

    if (session === null) {
      return router.push('/login?message="Please log in to use this feature."');
    }

    try {
      const newConversation = await startNewConversation(
        session.user.id,
        donated_by,
        id
      );

      if (newConversation) {
        dispatch({
          type: 'SET_CURRENT_CONVERSATION',
          payload: newConversation,
        });
        dispatch({
          type: 'SET_SHOW_CONVERSATIONS_LIST',
          payload: false,
        });
      }

      router.push('/conversations');
    } catch (error) {
      setMessage('Something went wrong. Please try again later.');
      console.error(error);
    }
  };

  return (
    <Link href={`/item/${id}`}>
      <div
        className='card m-auto mt-8
      grid h-[568px] w-[350px] grid-cols-1 grid-rows-[334.54px_137px_49px] gap-[24px] p-0'
      >
        <div className='relative h-[334.53px] w-[350px]'>
          <Image
            src={imageSrc ? `${imageSrc}` : '/default-item-img.png'}
            alt={`Image of ${item_name}`}
            fill
            sizes='(max-width: 768px) 100vw, 50vw'
          />
        </div>

        <div className='flex h-[137px] w-[350px] flex-col justify-between text-start'>
          <section className='flex h-[58px] flex-col justify-between'>
            <p className='text-sm text-primaryGray'>
              Date added:{' '}
              <span>
                {created_at.slice(0, 10).split('-').toReversed().join('.')}
              </span>
            </p>
            <p className='text-[2rem]'>
              <b>{item_name}</b>
            </p>
          </section>

          <section className='flex h-[67px] flex-col justify-between'>
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
          </section>
        </div>

        {message.length > 0 && <p className='error-message'>{message}</p>}

        <button
          className='button col-span-1 rounded'
          onClick={(event) => messageButtonHandler(event)}
        >
          MESSAGE
        </button>
      </div>
    </Link>
  );
};

export default ItemCard;
