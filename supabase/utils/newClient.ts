import { createBrowserClient } from '@supabase/ssr';
import { SupabaseClient } from '@supabase/supabase-js';

let supabase: SupabaseClient | null = null;

const newClient = (): SupabaseClient => {
  if (supabase === null) {
    const supabaseUrl: string | undefined =
      process.env.NEXT_PUBLIC_SUPABASE_URL;
    const supabaseKey: string | undefined =
      process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

    if (!supabaseKey || !supabaseUrl) {
      throw new Error('Supabase key or URL is not defined.');
    }
    supabase = createBrowserClient(supabaseUrl, supabaseKey);
  }
  return supabase;
};

export default newClient;
