import { createClient } from '@/utils/supabase/server';
import { cookies } from 'next/headers';
import React from 'react';

const DisplayItemDetails = async ({ params }: { params: { id: string } }) => {
  const cookieStore = cookies();
  const supabase = createClient(cookieStore);

  try {
    const { data, error } = await supabase
      .from('items')
      .select()
      .eq('id', params.id);

    if (error || !data || data.length === 0) {
      throw new Error('Error fetching data');
    } else {
      console.log(data[0]);
    }
  } catch {}
  return <div>DisplayItemDetails</div>;
};

export default DisplayItemDetails;
