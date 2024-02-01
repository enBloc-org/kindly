import { SupabaseClient } from '@supabase/supabase-js';

export async function getProfile(
  supabase: SupabaseClient,
  supabaseId: string | undefined
) {
  return supabase.from('profiles').select('*').eq('id', supabaseId).single();
}
