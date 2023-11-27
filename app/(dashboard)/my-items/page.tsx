import React from 'react';
// import ItemCard from '@/components/ItemCard';
import { RetreiveItemsFromSupabase } from '@/utils/supabase/RetreiveFromSupabase';
import { createServerComponentClient } from '@supabase/auth-helpers-nextjs';
import { cookies } from 'next/headers';
import ItemCard from '@/components/ItemCard';

const MyItemsPage = async () => {
  const supabase = createServerComponentClient({ cookies });
  const { data } = await supabase.auth.getSession();

  const currentUser = data.session?.user.id;

  if (!currentUser) {
    // Handle the case where the user ID is not available
    console.error('User ID not available');
    return <div>Error loading items</div>;
  }

  const items = await RetreiveItemsFromSupabase(
    'items',
    '',
    'donated_by',
    currentUser
  );

  return (
    <ul>
      {items?.map((item) => (
        <li key={item.id}>
          <ItemCard
            img={item.image}
            title={item.item_name}
            size={item.size}
            donor={item.donated_by}
            location={item.postcode}
            postageCovered={item.postable}
            link={item.item_description}
          ></ItemCard>
        </li>
      ))}
    </ul>
  );
};

export default MyItemsPage;
