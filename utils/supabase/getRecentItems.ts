import newClient from '@/config/supabaseclient';

export async function getRecentItems() {
  const supabase = newClient();
  const { data, error } = await supabase
    .from('items')
    .select('*')
    .order('created_at', { ascending: false })
    .limit(4);
  if (error) {
    console.log(error);
  }
  return data;
}
