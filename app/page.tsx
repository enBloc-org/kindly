import { createClient } from '@/utils/supabase/server';
import { cookies } from 'next/headers';
import React from 'react';
import { RetreiveFromSupabase } from '@/utils/supabase/RetreiveFromSupabase';

export default async function Index() {
  const cookieStore = cookies();

  const canInitSupabaseClient = () => {
    // This function is just for the interactive tutorial.
    // Feel free to remove it once you have Supabase connected.
    try {
      createClient(cookieStore);
      return true;
    } catch (e) {
      return false;
    }
  };

  const isSupabaseConnected = canInitSupabaseClient();

  // Example to retrieve Items Brand
  const items = await RetreiveFromSupabase('items', 'brand', '', '');

  return (
    <div>
      <h1>Kindly</h1>
      <h1>Testing deployment</h1>
      {items?.map((item) => <p key={item.brand}>{item.brand}</p>)}
    </div>
  );
}
