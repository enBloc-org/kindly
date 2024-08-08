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

type ItemDetailsClientProps = {
  item: PartialItem;
  user: { id: string };
  canMessage: boolean;
  donorId: string;
  donorEmail: string;
  donorName: string;
  title: string;
};

const DisplayItemDetailsClient: React.FC<ItemDetailsClientProps> = ({
  item,
  user,
  canMessage,
  donorId,
  donorEmail,
  donorName,
  title,
}) => {
  const [requestStatus, setRequestStatus] = useState<string | null>(null);

  const handleReserve = async () => {
    try {
      const message = await updateRequestToReserve(item.id!, user.id!);
      setRequestStatus(message);
    } catch (error) {
      setRequestStatus('Failed to send request to reserve the item.');
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
        {requestStatus && (
          <p className='text-center text-red-500'>{requestStatus}</p>
        )}
        {canMessage && user?.id && item.id && (
          <div className='flex flex-row gap-4 pb-10'>
            <NewConversationButton
              userId={user?.id}
              donorId={donorId}
              donorEmail={donorEmail}
              title={title}
              item_id={item.id}
            />
            <ButtonRounded type='button' clickHandler={handleReserve}>
              RESERVE ITEM
            </ButtonRounded>
          </div>
        )}
      </div>
    </>
  );
};

export default DisplayItemDetailsClient;
