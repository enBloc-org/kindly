import { createClient } from '@/utils/supabase/server';
import { redirect } from 'next/navigation';
import AuthForm from '../../../components/AuthForm';
import { cookies } from 'next/headers';

export default function Login({
  searchParams,
}: {
  searchParams: { message: string };
}) {
  const signIn = async (formData: FormData) => {
    'use server';

    const email = formData.get('email') as string;
    const password = formData.get('password') as string;
    const cookieStore = cookies();
    const supabase = createClient(cookieStore);

    const { error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    if (error) {
      return redirect('/login?message=Could not authenticate user');
    }
    return redirect('/home-page');
  };

  return (
    <div className='flex-1 flex flex-col w-full px-8 sm:max-w-md justify-center gap-2'>
      <AuthForm
        onSubmit={signIn}
        buttonText='LOG IN'
        searchParams={searchParams}
        isSignUp={false}
      />
    </div>
  );
}
