'use client';

import { getItems } from '@/supabase/models/getItems';
import Link from 'next/link';
import Modal from '@/components/Modal';
import ItemCard from '@/components/ItemCard';
import React, { useEffect, useState } from 'react';
import { PartialItem } from '@/types/supabaseTypes';
import useMediaQuery from './hooks/useMediaQuery';
import ReserveForUserModal from './ReserveForUserModal';
import selectConversationsByItemId from '@/supabase/models/messaging/selectConversationsByItemId';
import insertSystemMessage from '@/supabase/models/messaging/insertSystemMessage';
import deleteItems from '@/supabase/models/deleteItems';
import upsertRow from '@/supabase/models/upsertRow';
import ButtonRounded from './buttons/ButtonRounded';

type DisplayDonatedItemsProps = {
  userId: string;
};

const DonatedItemsList: React.FC<DisplayDonatedItemsProps> = ({
  userId,
}: DisplayDonatedItemsProps) => {
  const isBreakpoint = useMediaQuery(1000);
  const [storeItems, setStoreItems] = useState<PartialItem[]>([]);
  const [error, setError] = useState('');
  const [deletedItemName, setDeletedItemName] = useState<string | undefined>(
    undefined
  );

  useEffect(() => {
    const fetchItems = async () => {
      try {
        const itemsResult = await getItems('items', '', 'donated_by', userId);
        itemsResult && setStoreItems(itemsResult);
        setError('You have not donated any items.');
      } catch (error) {
        setError('An error has occured while retrieving your donated items.');
        throw new Error(
          'An error has occured while retrieving your donated items.'
        );
      }
    };
    fetchItems();
  }, []);

  const handleDeleteSuccess = async (itemId: number) => {
    try {
      const selectedConversations = await selectConversationsByItemId(itemId);
      selectedConversations.forEach((conversation) => {
        insertSystemMessage(
          conversation,
          'This item is no longer available for donation.'
        );
      });
      const deletedItem = storeItems.find((item) => item.id === itemId);
      if (deletedItem) {
        setDeletedItemName(deletedItem?.item_name);
      }
      setStoreItems(storeItems.filter((item) => item.id !== itemId));
    } catch (error) {
      console.error(`Error inserting system message: ${error}`);
      throw error;
    }

    try {
      await deleteItems(itemId);
    } catch (error) {
      console.error('Failed to delete item:', error);
      throw error;
    }
  };

  const unreserveHandler = async (itemId: number) => {
    try {
      await upsertRow('items', {
        id: itemId,
        is_reserved: false,
        reserved_by: null,
      });
      onReserveStatusChange(itemId);
    } catch (error) {
      console.error(error);
    }
  };

  const onReserveStatusChange = (itemId: number): void => {
    setStoreItems((prevItems) => {
      return prevItems.map((item: PartialItem) =>
        item.id === itemId ? { ...item, is_reserved: !item.is_reserved } : item
      );
    });
  };

  return (
    <div className='m-auto mt-10 w-5/6'>
      <h2 className='m-5 text-lg font-medium md:pl-20 lg:pl-40'>
        My donated items:
      </h2>
      {deletedItemName && (
        <h2 className='mb-2 text-center text-xl font-bold'>
          You have successfully deleted &#34;{deletedItemName}&#34;
        </h2>
      )}

      {storeItems && storeItems.length > 0 ? (
        <ul
          className={`flex flex-col items-center gap-10 ${isBreakpoint ? 'mb-20' : 'mb-4'}`}
        >
          {storeItems
            .slice()
            .reverse()
            .map((item) => (
              <li key={item.id}>
                <ItemCard
                  imageSrc={item.imageSrc}
                  item_name={item.item_name}
                  condition={item.condition}
                  item_type={item.item_type}
                  postcode={item.postcode}
                  postable={item.postable}
                  id={item.id}
                  is_reserved={item.is_reserved}
                />
                <div className='flex flex-row gap-2'>
                  <Link href={`/edit-item/${item.id}`}>
                    <p className='button button-rounded my-2'>Edit item</p>
                  </Link>
                  <Modal
                    name='Delete Item'
                    targetId={item.id}
                    message='By pressing "Confirm" you will delete this item permanently.'
                    onDeleteSuccess={() => handleDeleteSuccess(item.id!)}
                  />
                  {item.is_reserved ? (
                    <ButtonRounded
                      clickHandler={() => unreserveHandler(item.id!)}
                      type='button'
                    >
                      Unreserve
                    </ButtonRounded>
                  ) : (
                    <ReserveForUserModal
                      name='Mark as Reserved'
                      itemId={item.id!}
                      onReserveStatusChange={() =>
                        onReserveStatusChange(item.id!)
                      }
                      requestedToReserveUserIds={item.requestedToReserve}
                    />
                  )}
                </div>
              </li>
            ))}
        </ul>
      ) : (
        <h2 className='m-5 text-lg font-thin md:pl-20 lg:pl-40'>{error}</h2>
      )}
    </div>
  );
};

export default DonatedItemsList;
