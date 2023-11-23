import Link from 'next/link';
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
    return redirect('/');
  };

  return (
    <div className='flex-1 flex flex-col w-full px-8 sm:max-w-md justify-center gap-2'>
      <Link
        href='/'
        className='absolute left-8 top-8 py-2 px-4 rounded-md no-underline text-foreground bg-btn-background hover:bg-btn-background-hover flex items-center group text-sm'
      >
        <svg
          xmlns='http://www.w3.org/2000/svg'
          width='24'
          height='24'
          viewBox='0 0 24 24'
          fill='none'
          stroke='currentColor'
          strokeWidth='2'
          strokeLinecap='round'
          strokeLinejoin='round'
          className='mr-2 h-4 w-4 transition-transform group-hover:-translate-x-1'
        >
          <polyline points='15 18 9 12 15 6' />
        </svg>{' '}
        Back
      </Link>

      <AuthForm
        onSubmit={signIn}
        buttonText='LOG IN'
        searchParams={searchParams}
      />
    </div>
  );
}
