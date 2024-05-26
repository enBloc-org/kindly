import newClient from '../utils/newClient';
import { PartialItem } from '@/types/supabaseTypes';

export default async function upsertRow(
  table: string,
  upsertValues: PartialItem
) {
  const supabase = newClient();
  const { error } = await supabase.from(table).upsert(upsertValues);

  if (error) {
    console.log(error);
    return false;
  }

  return true;
}
