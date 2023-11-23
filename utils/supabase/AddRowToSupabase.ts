import { UUID } from 'crypto';
import newClient from '../../config/supabaseclient';
import { item, profile } from './types';
import { profile } from 'console';
export default async function AddRowToSupabase(
  table: string,
  InsertValues: item | profile
) {
  try {
    // setSubmitting(true);
    const supabase = newClient();
    const { data, error } = await supabase
      .from(table)
      .insert(InsertValues)
      .select();
  } catch (error) {
    // setSubmitting(false);
    console.log('An unexpected error occurred');
  }
}
