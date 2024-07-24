'use server';
import { item } from '../../types/supabaseTypes';
import newClient from '../utils/newClient';

export default async function searchByName(name: string): Promise<item[]> {
  const supabase = newClient();

  const { data, error } = await supabase
    .from('items')
    .select()
    .ilike('item_name', `%${name}%`);

  if (!data || error) {
    return [];
  }

  return data as item[];
}
