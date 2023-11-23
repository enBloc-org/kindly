
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
    // TO BE DELETED AT THE END OF PROJECT
    if (error) {
      console.error('Supabase insert error:', error);
    } else {
      console.log('Supabase insert success:', data);
    }
  } catch (error) {
    // setSubmitting(false);
    console.log('An unexpected error occurred');
  }
}
