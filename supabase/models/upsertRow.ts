import newClient from '../utils/newClient';
import { PartialItem } from '@/types/supabaseTypes';

export default async function upsertRow(
  table: string,
  upsertValues: PartialItem
) {
  const supabase = newClient();

  try {
    const { data: editedItem, error } = await supabase
      .from(table)
      .upsert(upsertValues)
      .select();

    if (error) {
      console.error(error);
      throw error;
    }

    return editedItem;
  } catch (error) {
    console.error(error);
    throw error;
  }
}
