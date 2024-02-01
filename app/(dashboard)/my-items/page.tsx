import { getItems } from '@/utils/supabase/getItems';
import { createServerComponentClient } from '@supabase/auth-helpers-nextjs';
import { cookies } from 'next/headers';
import ItemCard from '@/components/ItemCard';

import Modal from '@/components/Modal';

const MyItemsPage = async () => {
  const supabase = createServerComponentClient({ cookies });
  const { data } = await supabase.auth.getSession();

  const currentUserId = data.session?.user.id;
  const fetchedItems = await getItems('items', '', 'donated_by', currentUserId);

  return (
    <div className='mt-10'>
      <h1 className='m-5 text-lg font-thin'>My donated items:</h1>

      {fetchedItems && fetchedItems.length > 0 ? (
        <ul className='flex flex-col gap-5'>
          {fetchedItems.map((item) => (
            <li key={item.id}>
              <ItemCard
                imageSrc={item.imageSrc}
                item_name={item.item_name}
                condition={item.condition}
                postcode={item.postcode}
                postable={item.postable}
                itemId={item.id}
              />
              <Modal
                name='Delete Item'
                itemId={item.id}
                message='By pressing "confirm" you will delete this item'
              />
            </li>
          ))}
        </ul>
      ) : (
        <h2 className='m-5 text-lg font-thin'>
          You have not donated any items.
        </h2>
      )}
    </div>
  );
};

export default MyItemsPage;
