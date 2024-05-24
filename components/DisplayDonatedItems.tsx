'use client';

import { getItems } from '@/supabase/models/getItems';
import Link from 'next/link';
import Modal from '@/components/Modal';
import ItemCard from '@/components/ItemCard';
import { useEffect, useState } from 'react';
import { PartialItem } from '@/types/supabaseTypes';
import useMediaQuery from './hooks/useMediaQuery';

type DisplayDonatedItemsProps = {
  userId: string;
};

const DisplayDonatedItems = ({ userId }: DisplayDonatedItemsProps) => {
  const isBreakpoint = useMediaQuery(1000);
  const [storeItems, setStoreItems] = useState<PartialItem[]>([]);

  useEffect(() => {
    const fetchItems = async () => {
      try {
        const fetchItemsRes = await getItems('items', '', 'donated_by', userId);
        setStoreItems(fetchItemsRes || []);
      } catch (error) {
        return (
          <div>An error has occured while retrieving your donated items.</div>
        );
      }
    };
    fetchItems();
  }, []);
  return (
    <div className='m-auto mt-10 w-5/6'>
      <h2 className='m-5 text-lg font-medium md:pl-20 lg:pl-40'>
        My donated items:
      </h2>

      {storeItems && storeItems.length > 0 ? (
        <ul
          className={`flex flex-col items-center gap-10 ${isBreakpoint ? 'mb-20' : 'mb-4'}`}
        >
          {storeItems.map((item) => (
            <li key={item.id}>
              <ItemCard
                imageSrc={item.imageSrc}
                item_name={item.item_name}
                condition={item.condition}
                postcode={item.postcode}
                postable={item.postable}
                itemId={item.id}
              />
              <div className='flex flex-row'>
                <Link href={`/edit-item/${item.id}`}>
                  <p className='button button-rounded mx-2 my-2'>Edit item</p>
                </Link>
                <Modal
                  name='Delete Item'
                  itemId={item.id}
                  message='By pressing Confirm you will delete this item'
                />
              </div>
            </li>
          ))}
        </ul>
      ) : (
        <h2 className='m-5 text-lg font-thin md:pl-20 lg:pl-40'>
          You have not donated any items.
        </h2>
      )}
    </div>
  );
};

export default DisplayDonatedItems;
