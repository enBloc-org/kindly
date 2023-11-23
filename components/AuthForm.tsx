'use client';
import { useState } from 'react';
import PropTypes from 'prop-types';

type AuthFormProps = {
  onSubmit: (formData: FormData) => Promise<void>;
  buttonText: string;
  searchParams: { message: string };
};

const AuthForm: React.FC<AuthFormProps> = ({
  onSubmit,
  buttonText,
  searchParams,
}) => {
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const formData = new FormData(e.target as HTMLFormElement);

    try {
      setErrorMessage(null);
      await onSubmit(formData);
    } catch (error: any) {
      setErrorMessage(error.message || 'An unexpected error occurred');
    }
  };

  return (
    <form
      className='animate-in flex-1 flex flex-col w-full justify-center gap-2 text-foreground'
      onSubmit={handleSubmit}
    >
      <label className='text-md' htmlFor='email'>
        Email
      </label>
      <input
        className='rounded-md px-4 py-2 bg-inherit border mb-6'
        name='email'
        placeholder='you@example.com'
        required
      />
      <label className='text-md' htmlFor='password'>
        Password
      </label>
      <input
        className='rounded-md px-4 py-2 bg-inherit border mb-6'
        type='password'
        name='password'
        placeholder='••••••••'
        required
      />
      <button className='bg-green-700 rounded-md px-4 py-2 text-foreground mb-2'>
        {buttonText}
      </button>

      {searchParams?.message && (
        <p className='mt-4 p-4 bg-foreground/10 text-foreground text-center'>
          {searchParams.message}
        </p>
      )}
      {errorMessage && (
        <p className='text-red-500 text-sm mt-2'>{errorMessage}</p>
      )}
    </form>
  );
};

AuthForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  buttonText: PropTypes.string.isRequired,
  searchParams: PropTypes.shape({
    message: PropTypes.string.isRequired,
  }).isRequired,
};

export default AuthForm;
