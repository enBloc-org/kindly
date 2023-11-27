import React from 'react';
// import ItemCard from '@/components/ItemCard';
import { RetreiveItemsFromSupabase } from '@/utils/supabase/RetreiveFromSupabase';

const MyItemsPage = async () => {
  const myid = 'b6e3f949-e931-453b-a3c8-afa5159b0034';
  const items = await RetreiveItemsFromSupabase(
    'items',
    '',
    'donated_by',
    myid
  );
  console.log(items);
  return <div>MyItemsPage</div>;
};

export default MyItemsPage;
