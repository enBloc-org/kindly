import newClient from '../utils/newClient';

export async function getProfile(supabaseId: string) {
  const supabase = newClient();
  return supabase.from('profiles').select('*').eq('id', supabaseId).single();
}
