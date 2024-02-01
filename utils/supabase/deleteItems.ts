import newClient from '@/config/supabaseclient';

// note for if we are turning row level security back on and this breaks If you use delete() with filters and you have RLS enabled, only rows visible through SELECT policies are deleted. Note that by default no rows are visible, so you need at least one SELECT/ALL policy that makes the rows visible.
export default async function deleteItems(columnCriteria: number) {
  try {
    const supabase = newClient();
    await supabase.from('items').delete().eq('id', columnCriteria);
  } catch (error) {
    console.log(error);
  }
}
