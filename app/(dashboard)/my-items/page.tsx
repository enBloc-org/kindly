import React from 'react';
// import ItemCard from '@/components/ItemCard';
import { RetreiveItemsFromSupabase } from '@/utils/supabase/RetreiveFromSupabase';

const MyItemsPage = async () => {
  const items = await RetreiveItemsFromSupabase('items', '', '', '');
  console.log(items);
  return <div>MyItemsPage</div>;
};

export default MyItemsPage;
