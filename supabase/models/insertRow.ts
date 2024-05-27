import newClient from '../utils/newClient';
import { PartialItem, PartialProfile } from '../../types/supabaseTypes';
export default async function insertRow(
  table: string,
  InsertValues: PartialItem | PartialProfile
) {
  try {
    // setSubmitting(true);
    const supabase = newClient();
    const response = await supabase.from(table).insert(InsertValues).select();
    const [createdRecord] = response?.data ?? [];
    return createdRecord as PartialItem;
  } catch (error) {
    // setSubmitting(false);
    console.log('An unexpected error occurred');
  }
}
