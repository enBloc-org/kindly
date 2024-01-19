import newClient from '@/config/supabaseclient';

export async function getMessages() {
  const supabase = newClient();
  const { data, error } = await supabase.from('messages').select('*');
  if (error) {
    console.log(error);
  }
  return data;
}
