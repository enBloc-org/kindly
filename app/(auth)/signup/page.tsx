'use client';
import { useState } from 'react';
import AuthForm from '@/components/AuthForm';
import SignupConfirmationPopup from '@/components/popups/SignupConfirmationPopup';

export default function SignUp({
  searchParams,
}: {
  searchParams: { message: string; confirm: string };
}) {
  const [email, setEmail] = useState<string>('');

  const signUp = async (formData: FormData) => {
    try {
      const response = await fetch('api/signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email: formData.get('email'),
          password: formData.get('password'),
          username: formData.get('user_name'),
          isRefugee: formData.get('refugee') === 'true',
        }),
      });

      if (response.redirected) {
        window.location.href = response.url;
      }

      setEmail(formData.get('email') as string);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className='flex flex-col items-center py-12'>
      <h2 className='text-5xl font-medium text-base-110'>Sing up</h2>
      {email !== '' && <SignupConfirmationPopup targetEmail={email} />}
      <AuthForm
        onSubmit={signUp}
        buttonText='Sing up'
        searchParams={searchParams}
        isSignUp={true}
      />
    </div>
  );
}
