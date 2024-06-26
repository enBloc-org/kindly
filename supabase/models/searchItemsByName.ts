import { item } from '../../types/supabaseTypes';
import newClient from '../utils/newClient';

export default async function searchItemsByName(name: string): Promise<item[]> {
  const supabase = newClient();

  try {
    const { data, error } = await supabase
      .from('items')
      .select()
      .ilike('item_name', `%${name}%`);

    if (error) {
      throw error;
    }
    return data ? (data as item[]) : [];
  } catch (error) {
    console.error(`Failed to get messages from database: ${error}`);
    throw error;
  }
}
