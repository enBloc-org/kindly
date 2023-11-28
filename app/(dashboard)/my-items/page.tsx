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
    // <div>Items</div>
    <ul>
      {fetchedItems?.map((item) => (
        <li key={item.id}>
          <ItemCard
            img={item.image}
            title={item.item_name}
            size={item.size}
            donor={item.donated_by}
            location={item.postcode}
            postageCovered={item.postable}
            link={item.id}
          ></ItemCard>
        </li>
      ))}
    </ul>
  );
};

export default MyItemsPage;
