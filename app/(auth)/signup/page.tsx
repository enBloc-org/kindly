import { createClient } from '@/utils/supabase/server';
import { redirect } from 'next/navigation';
import AddRowToSupabase from '@/utils/supabase/AddRowToSupabase';
import AuthForm from '@/components/AuthForm';
import { headers, cookies } from 'next/headers';
import { PartialProfile } from '@/utils/supabase/types';

export default function SignUp({
  searchParams,
}: {
  searchParams: { message: string };
}) {
  const signUp = async (formData: FormData) => {
    'use server';

    const origin = headers().get('origin');
    const email = formData.get('email') as string;
    const password = formData.get('password') as string;
    const username = formData.get('user_name') as string;
    const postcode = formData.get('postcode') as string;
    const cookieStore = cookies();
    const supabase = createClient(cookieStore);

    const { data, error } = await supabase.auth.signUp({
      email,
      password,
      options: {
        emailRedirectTo: `${origin}/auth/callback`,
      },
    });

    if (error) {
      return redirect('/login?message=Could not authenticate user');
    }

    // Get userId and insert it as ID in Profiles table
    const userId = data?.user?.id as string | number;
    AddRowToSupabase('profiles', {
      id: userId && userId,
      email: email,
      postcode: postcode,
      username: username,
    } as PartialProfile);

    return redirect('/login?message=Check email to continue sign in process');
  };

  return (
    <div className='flex-1 flex flex-col w-full px-8 sm:max-w-md justify-center gap-2'>
      <AuthForm
        onSubmit={signUp}
        buttonText='REGISTER'
        searchParams={searchParams}
        isSignUp={true}
      />
    </div>
  );
}
