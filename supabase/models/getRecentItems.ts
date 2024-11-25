import newClient from '@/supabase/utils/newClient';
import { item } from '@/types/supabaseTypes';
import { PostgrestError } from '@supabase/supabase-js';

export default async function getRecentItems() {
  const supabase = newClient();

  try {
    const {
      data,
      error,
    }: { data: item[] | null; error: PostgrestError | null } =
      await supabase.rpc('fetch_recently_added_items');

    if (error) throw error;

    return data || [];
  } catch (error) {
    console.error(
      `Failed to fetch recently added items from database: ${error}`
    );
    throw error;
  }
}
