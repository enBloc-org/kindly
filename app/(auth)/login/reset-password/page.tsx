import Link from 'next/link';
import { redirect } from 'next/navigation';
import newServerClient from '@/supabase/utils/newServerClient';
import ResetPasswordForm from '../../../../components/ResetPasswordForm';

export default async function ResetPassword({
  searchParams,
}: {
  searchParams: { message: string; code: string };
}) {
  const supabase = newServerClient();

  const {
    data: { session },
  } = await supabase.auth.getSession();

  if (session) {
    return redirect('/');
  }

  const resetPassword = async (formData: FormData) => {
    'use server';

    const password = formData.get('password') as string;
    const confirmPassword = formData.get('confirmPassword') as string;
    const supabase = newServerClient();

    if (password !== confirmPassword) {
      return redirect(`/login/reset-password?message=Passwords do not match!`);
    }

    if (searchParams.code) {
      const { error } = await supabase.auth.exchangeCodeForSession(
        searchParams.code
      );

      if (error) {
        return redirect(
          `/login/reset-password?message=Unable to reset Password. Link expired!`
        );
      }
    }

    const { error } = await supabase.auth.updateUser({
      password,
    });

    if (error) {
      console.log(error);
      return redirect(
        `/login/reset-password?message=Unable to reset Password. Try again!`
      );
    }

    return redirect(
      `/login?message=Your Password has been reset successfully. Sign in.`
    );
  };

  return (
    <div>
      <Link href='/' className='mt-2 text-sm text-primaryGreen'>
        Home
      </Link>

      <div className='flex flex-col items-center px-8'>
        <ResetPasswordForm
          onSubmit={resetPassword}
          searchParams={searchParams}
        />
      </div>
    </div>
  );
}
