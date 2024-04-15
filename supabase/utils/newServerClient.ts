import {
  CookieOptions,
  createServerClient as serverClient,
} from '@supabase/ssr';
import { cookies } from 'next/headers';

const newServerClient = () => {
  const supabaseUrl: string | undefined = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const supabaseKey: string | undefined =
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

  if (!supabaseKey) {
    throw new Error('Supabase key is not defined.');
  }
  if (!supabaseUrl) {
    throw new Error('Supabase URL key is not defined.');
  }
  const cookieStore = cookies();

  const supabase = serverClient(supabaseUrl, supabaseKey, {
    cookies: {
      get(name: string) {
        return cookieStore.get(name)?.value;
      },
      set(name: string, value: string, options: CookieOptions) {
        try {
          cookieStore.set({ name, value, ...options });
        } catch (error) {
          // The 'set' method was called from a Server Component.
          //This can be ignored if you have middleware refreshing
          //user sessions.
        }
      },
      remove(name: string, options: CookieOptions) {
        try {
          cookieStore.set({ name, value: '', ...options });
        } catch (error) {
          // The 'delete' method was called from a Server Component.
          // This can be ignored if you have a middleware refreshing
          // user sessions
        }
      },
    },
  });
  return supabase;
};

export default newServerClient;
