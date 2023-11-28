import { RetreiveItemsFromSupabase } from '@/utils/supabase/RetreiveFromSupabase';
import { createServerComponentClient } from '@supabase/auth-helpers-nextjs';
import { cookies } from 'next/headers';
import ItemCard from '@/components/ItemCard';

const MyItemsPage = async () => {
  let fetchedItems = [];
  try {
    const supabase = createServerComponentClient({ cookies });
    const { data } = await supabase.auth.getSession();

    const currentUserId = data.session?.user.id;
    fetchedItems = await RetreiveItemsFromSupabase(
      'items',
      '',
      'donated_by',
      currentUserId
    );
    console.log(fetchedItems);
  } catch (error) {
    console.error('Error fetching data:', error);
  }

  return (
    <div className='mt-10'>
      <ul>
        {fetchedItems?.map((item) => (
          <li key={item.id}>
            <ItemCard
              imageSrc={item.imageSrc}
              item_name={item.item_name}
              condition={item.condition}
              donated_by={item.donated_by}
              postcode={item.postcode}
              postable={item.postable}
              link={item.id}
            ></ItemCard>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MyItemsPage;
