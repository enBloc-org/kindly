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
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const signUp = async (formData: FormData) => {
    setErrorMessage(null);
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

      const result = await response.json();

      if (!response.ok) {
        setErrorMessage(result.error || 'Unexpected error occurred');
        return undefined;
      }

      setEmail(result.profile?.email);
      return result.profile;
    } catch (error) {
      console.error('Signup error:', error);
      setErrorMessage('An error occurred during sign up. Please try again.');
      return undefined;
    }
  };

  return (
    <div className='flex flex-col items-center py-12'>
      <h2 className='text-5xl font-medium text-base-110'>Sign up</h2>
      {email && <SignupConfirmationPopup targetEmail={email} />}
      <AuthForm
        onSubmit={signUp}
        buttonText='Sign up'
        searchParams={{ ...searchParams, message: errorMessage ?? '' }}
        externalErrorMessage={errorMessage}
        isSignUp={true}
      />
    </div>
  );
}
