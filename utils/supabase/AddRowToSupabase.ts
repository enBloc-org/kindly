import newClient from '../../config/supabaseclient';
import { item, profile, PartialProfile } from './types';
export default async function AddRowToSupabase(
  table: string,
  InsertValues: item | PartialProfile
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
