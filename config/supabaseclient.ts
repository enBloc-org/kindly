import { createClient } from '@supabase/supabase-js';

const newClient = () => {
  const supabaseUrl: string | undefined = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const supabaseKey: string | undefined =
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

  if (!supabaseKey) {
    throw new Error('Supabase key is not defined.');
  }
  if (!supabaseUrl) {
    throw new Error('Supabase URL key is not defined.');
  }

  return createClient(supabaseUrl, supabaseKey);
};

export default newClient;
