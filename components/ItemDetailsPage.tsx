'use client';

import Image from 'next/image';
import ItemDetails from '@/components/ItemDetails';
import PostageOptionDisplay from '@/components/PostageOptionDisplay';
import NewConversationButton from '@/components/buttons/NewConversationButton';

import BackButton from '@/components/buttons/BackButton';
import ButtonRounded from './buttons/ButtonRounded';
import { updateRequestToReserve } from '@/supabase/models/updateRequestToReserve';
import { PartialItem } from '@/types/supabaseTypes';
import { useState } from 'react';

type ItemDetailsPageProps = {
  item: PartialItem;
  user: { id: string };
  canMessage: boolean;
  donorEmail: string;
  donorName: string;
};

const ItemDetailsPage: React.FC<ItemDetailsPageProps> = ({
  item,
  user,
  canMessage,
  donorEmail,
  donorName,
}) => {
  const [message, setMessage] = useState<string | null>(null);

  const handleReserve = async () => {
    try {
      const message = await updateRequestToReserve(item.id!, user.id!);
      setMessage(message);
    } catch (error) {
      setMessage('Failed to send request to reserve the item.');
      console.error('Error reserving item:', error);
    }
  };

  return (
    <>
      <BackButton />
      <div className='mb-10 mt-2 flex flex-col items-center gap-14'>
        <div className='relative h-52 w-72 md:h-72 md:w-96'>
          <Image
            src={`${item.imageSrc}`}
            alt={`${item.item_name}`}
            layout='fill'
            objectFit='cover'
            className='shadow-md'
          />
        </div>
        <PostageOptionDisplay
          collectible={item.collectible}
          postable={item.postable}
          postage_covered={item.postage_covered}
        />
        <div className='min-h-40 w-full bg-secondaryGray p-10 md:w-1/2 md:rounded-lg'>
          <div className='flex flex-row justify-between'>
            <h2 className='place-self-center text-xl italic'>
              {item.item_name}
            </h2>
            {item.reserved && <p className='reserved'>Reserved</p>}
          </div>
          <h3 className='pt-3 font-light'>Description:</h3>
          <p className='pt-2 text-center'>{item.item_description}</p>
        </div>
        <ItemDetails
          condition={item.condition}
          donated_by={donorName}
          postcode={item.postcode}
          fontSize='text-lg'
        />
        {message && <p className='error-message text-center'>{message}</p>}
        {canMessage && user?.id && item.id && (
          <div className='flex flex-row gap-4 pb-10'>
            <NewConversationButton
              userId={user?.id}
              donorId={item.donated_by!}
              donorEmail={donorEmail}
              title={item.item_name!}
              item_id={item.id}
            />
            <ButtonRounded type='button' clickHandler={handleReserve}>
              REQUEST ITEM
            </ButtonRounded>
          </div>
        )}
      </div>
    </>
  );
};

export default ItemDetailsPage;
