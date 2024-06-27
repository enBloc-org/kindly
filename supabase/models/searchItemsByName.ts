import { item } from '../../types/supabaseTypes';
import newClient from '../utils/newClient';

export default async function searchItemsByName(
  name: string,
  limit: number,
  cursor: string
): Promise<item[]> {
  const supabase = newClient();

  try {
    let query = supabase
      .from('items')
      .select()
      .ilike('item_name', `%${name}%`)
      .order('created_at', { ascending: false })
      .limit(Number(limit));

    if (cursor) {
      query = query.lt('created_at', cursor);
    }

    const { data, error } = await query;

    if (error) {
      throw error;
    }
    return data ? (data as item[]) : [];
  } catch (error) {
    console.error(`Failed to get messages from database: ${error}`);
    throw error;
  }
}
