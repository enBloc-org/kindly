import Link from 'next/link';
import { redirect } from 'next/navigation';
import newServerClient from '@/supabase/utils/newServerClient';
import { headers } from 'next/headers';

export default async function ForgotPassword({
  searchParams,
}: {
  searchParams: { message: string };
}) {
  const supabase = newServerClient();

  let origin = headers().get('origin');
  if (!origin) {
    origin = 'http://localhost:3000/';
  }

  const {
    data: { session },
  } = await supabase.auth.getSession();

  if (session) {
    return redirect('/');
  }

  const confirmReset = async (formData: FormData) => {
    'use server';

    const email = formData.get('email') as string;
    const supabase = newServerClient();

    const { error } = await supabase.auth.resetPasswordForEmail(email, {
      redirectTo: `${origin}/login/reset-password`,
    });

    if (error) {
      return redirect(
        '/login/forgot-password?message=Could not authenticate user'
      );
    }
    return redirect(
      `/login/forgot-password?message=A reset email password has been sent to ${encodeURIComponent(email)}`
    );
  };

  return (
    <div className='flex flex-col  items-center  px-8'>
      <form
        className='text-foreground flex flex-1  flex-col  items-center justify-center gap-4'
        action={confirmReset}
      >
        <label className='text-md' htmlFor='email'>
          Enter Email Address
        </label>
        <input
          className='mb-2 rounded border border-primaryGreen bg-white p-2 shadow'
          name='email'
          placeholder='you@example.com'
          required
        />

        <button className='button button-rounded mb-2'>Confirm Reset</button>

        {searchParams?.message && (
          <p className='bg-foreground/10 text-foreground mt-4 p-4 text-center'>
            {searchParams.message}
          </p>
        )}
      </form>
      <Link href='/login' className='mt-2 text-sm text-primaryGreen'>
        Remember your password? Sign in
      </Link>
    </div>
  );
}
