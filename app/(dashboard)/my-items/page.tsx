import { RetreiveItemsFromSupabase } from '@/utils/supabase/RetreiveFromSupabase';
import { createServerComponentClient } from '@supabase/auth-helpers-nextjs';
import { cookies } from 'next/headers';
import ItemCard from '@/components/ItemCard';
import DeleteButton from '@/components/DeleteButton';

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
  const { data: profile } = await supabase
    .from('profiles')
    .select('username')
    .eq('id', currentUserId)
    .single();

  return (
    <div className='mt-10'>
      <h1 className='text-lg font-thin m-5'>My donated items:</h1>
      <ul className='flex flex-col gap-5'>
        {fetchedItems?.map((item) => (
          <li key={item.id}>
            <ItemCard
              imageSrc={item.imageSrc}
              item_name={item.item_name}
              condition={item.condition}
              donated_by={profile?.username}
              postcode={item.postcode}
              postable={item.postable}
              itemId={item.id}
            ></ItemCard>
            <DeleteButton itemId={item?.id} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MyItemsPage;
