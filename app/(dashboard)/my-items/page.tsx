import { RetreiveItemsFromSupabase } from '@/utils/supabase/RetreiveFromSupabase';
import { createServerComponentClient } from '@supabase/auth-helpers-nextjs';
import { cookies } from 'next/headers';
import ItemCard from '@/components/ItemCard';

const MyItemsPage = async () => {
  const supabase = createServerComponentClient({ cookies });
  const { data } = await supabase.auth.getSession();

  const currentUserId = data.session?.user.id;
  const fetchedItems = await RetreiveItemsFromSupabase(
    'items',
    '',
    'donated_by',
    currentUserId
  );

  return (
    <div className='mt-10'>
      <h1 className='text-lg font-thin m-5'>My dontated items:</h1>
      <ul className='flex flex-col gap-5'>
        {fetchedItems?.map((item) => (
          <li key={item.id}>
            <ItemCard
              imageSrc={item.imageSrc}
              item_name={item.item_name}
              condition={item.condition}
              item_type={item.item_type}
              postcode={item.postcode}
              postable={item.postable}
              itemId={item.id}
            ></ItemCard>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MyItemsPage;
