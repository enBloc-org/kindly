import React from 'react';
// import ItemCard from '@/components/ItemCard';
import { RetreiveItemsFromSupabase } from '@/utils/supabase/RetreiveFromSupabase';
import { createServerComponentClient } from '@supabase/auth-helpers-nextjs';
import { cookies } from 'next/headers';

const MyItemsPage = async () => {
  const supabase = createServerComponentClient({ cookies });
  const { data } = await supabase.auth.getSession();
  console.log(data.session?.user.id);
  const currentUser = data.session?.user.id;

  const items = await RetreiveItemsFromSupabase(
    'items',
    '',
    'donated_by',
    currentUser
  );
  console.log(items);
  return <div>MyItemsPage</div>;
};

export default MyItemsPage;
