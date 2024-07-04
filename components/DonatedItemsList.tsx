'use client';

import { getItems } from '@/supabase/models/getItems';
import Link from 'next/link';
import Modal from '@/components/Modal';
import ItemCard from '@/components/ItemCard';
import React, { useEffect, useState } from 'react';
import { PartialItem, item } from '@/types/supabaseTypes';
import useMediaQuery from './hooks/useMediaQuery';
import ReserveForUserModal from './ReserveForUserModal';
import UnreserveButton from './buttons/UnreserveButton';

type DisplayDonatedItemsProps = {
  userId: string;
};

const DonatedItemsList: React.FC<DisplayDonatedItemsProps> = ({
  userId,
}: DisplayDonatedItemsProps) => {
  const isBreakpoint = useMediaQuery(1000);
  const [storeItems, setStoreItems] = useState<PartialItem[]>([]);
  const [error, setError] = useState('');

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

  const handleDeleteSuccess = (deleteItemId: number) => {
    setStoreItems(storeItems.filter((item: item) => item.id !== deleteItemId));
  };

  return (
    <div className='m-auto mt-10 w-5/6'>
      <h2 className='m-5 text-lg font-medium md:pl-20 lg:pl-40'>
        My donated items:
      </h2>

      {storeItems && storeItems.length > 0 ? (
        <ul
          className={`flex flex-col items-center gap-10 ${isBreakpoint ? 'mb-20' : 'mb-4'}`}
        >
          {storeItems
            .slice()
            .reverse()
            .map((item: item) => (
              <li key={item.id}>
                <ItemCard
                  imageSrc={item.imageSrc}
                  item_name={item.item_name}
                  condition={item.condition}
                  postcode={item.postcode}
                  postable={item.postable}
                  itemId={item.id}
                />
                <div className='flex flex-row gap-2'>
                  <Link href={`/edit-item/${item.id}`}>
                    <p className='button button-rounded my-2'>Edit item</p>
                  </Link>
                  <Modal
                    name='Delete Item'
                    itemId={item.id}
                    message='By pressing Confirm you will delete this item'
                    onDeleteSuccess={() => handleDeleteSuccess(item.id!)}
                  />
                  {item.reserved ? (
                    <UnreserveButton itemId={item.id} />
                  ) : (
                    <ReserveForUserModal
                      name='Mark as Reserved'
                      itemId={item.id}
                      currentUserId={userId}
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
