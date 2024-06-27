import newClient from '@/supabase/utils/newClient';
import { PartialItem } from '@/types/supabaseTypes';
import { PostgrestError } from '@supabase/supabase-js';

const selectItemsByCreatedAt = async (
  cursor: string,
  limit: number
): Promise<PartialItem[]> => {
  try {
    const supabase = newClient();

    let query = supabase
      .from('items')
      .select('*')
      .order('created_at', { ascending: false })
      .limit(Number(limit));

    if (cursor) {
      query = query.lt('created_at', cursor);
    }

    const {
      data,
      error,
    }: { data: PartialItem[] | null; error: PostgrestError | null } =
      await query;

    if (error) throw error;

    return data ? (data as PartialItem[]) : [];
  } catch (error) {
    console.error(`Failed to fetch conversations from database: ${error}`);
    throw error;
  }
};

export default selectItemsByCreatedAt;
