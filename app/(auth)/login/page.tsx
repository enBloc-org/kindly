import { redirect } from 'next/navigation';
import AuthForm from '../../../components/AuthForm';
import newServerClient from '@/supabase/utils/newServerClient';
import { getProfile } from '@/supabase/models/getProfile';

export default function Login({
  searchParams,
}: {
  searchParams: { message: string };
}) {
  const signIn = async (formData: FormData) => {
    'use server';

    const email = formData.get('email') as string;
    const password = formData.get('password') as string;
    const supabase = newServerClient();

    const { data, error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    if (error)
      redirect(
        '/login?message=Something has gone wrong. Please try again later.'
      );

    const userId = data.user?.id;
    if (userId) {
      const { data } = await getProfile(userId);
      return data;
    }
  };

  return (
    <div className='flex flex-col items-center py-12 '>
      <h2 className='text-5xl font-medium text-base-110'>Log in</h2>
      <AuthForm
        onSubmit={signIn}
        buttonText='Log in'
        searchParams={searchParams}
        isSignUp={false}
      />
    </div>
  );
}
