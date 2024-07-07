import { createClient, SupabaseClient } from '@supabase/supabase-js';

let supabaseAdmin: SupabaseClient | null = null;

export default function newAdminClient(): SupabaseClient {
  if (supabaseAdmin === null) {
    const supabaseUrl: string | undefined =
      process.env.NEXT_PUBLIC_SUPABASE_URL;
    const supabaseServiceRoleKey: string | undefined =
      process.env.SUPABASE_SERVICE_ROLE_KEY;

    if (!supabaseUrl || !supabaseServiceRoleKey)
      throw new Error('Could not create client');
    supabaseAdmin = createClient(supabaseUrl, supabaseServiceRoleKey);
  }
  return supabaseAdmin;
}
