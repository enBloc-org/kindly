'use server';
import { cookies } from 'next/headers';
import { createClient } from '@/supabase/modals/server';
import { item } from '../../types/types';

export default async function searchByName(name: string): Promise<item[]> {
  const cookieStore = cookies();
  const supabase = createClient(cookieStore);

  const { data, error } = await supabase
    .from('items')
    .select()
    .ilike('item_name', `%${name}%`);

  if (!data || error) {
    return [];
  }

  return data as item[];
}
