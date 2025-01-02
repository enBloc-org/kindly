'use client';
import { useState } from 'react';

type ResetPasswordFormProps = {
  onSubmit: (formData: FormData) => Promise<void>;
  searchParams?: { message: string };
};

const ResetPasswordForm: React.FC<ResetPasswordFormProps> = ({
  onSubmit,
  searchParams,
}) => {
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const handleTogglePassword = () => {
    setShowPassword(!showPassword);
  };

  const handleToggleConfirmPassword = () => {
    setShowConfirmPassword(!showConfirmPassword);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (password.length < 6) {
      setErrorMessage('Password must be at least 6 characters long.');
      return;
    }

    if (password !== confirmPassword) {
      setErrorMessage('Passwords do not match!');
      return;
    }

    const formData = new FormData(e.target as HTMLFormElement);

    try {
      setErrorMessage(null);
      await onSubmit(formData);
    } catch (error) {
      if (error instanceof Error) {
        setErrorMessage(error.message);
      } else {
        setErrorMessage('An unexpected error occurred.');
      }
    }
  };

  return (
    <form
      className='text-foreground flex flex-1 flex-col items-center justify-center gap-4'
      onSubmit={handleSubmit}
    >
      <label className='text-md' htmlFor='password'>
        New Password
      </label>
      <div className='relative'>
        <input
          className='mb-2 rounded border border-primaryGreen bg-white p-2 shadow'
          type={showPassword ? 'text' : 'password'}
          id='password'
          name='password'
          placeholder='••••••••'
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button
          type='button'
          className='absolute right-2 top-2'
          onClick={handleTogglePassword}
        >
          {showPassword ? 'Hide' : 'Show'}
        </button>
      </div>

      <label className='text-md' htmlFor='confirmPassword'>
        Confirm New Password
      </label>
      <div className='relative'>
        <input
          className='mb-2 rounded border border-primaryGreen bg-white p-2 shadow'
          type={showConfirmPassword ? 'text' : 'password'}
          id='confirmPassword'
          name='confirmPassword'
          placeholder='••••••••'
          onChange={(e) => setConfirmPassword(e.target.value)}
          required
        />
        <button
          type='button'
          className='absolute right-2 top-2'
          onClick={handleToggleConfirmPassword}
        >
          {showConfirmPassword ? 'Hide' : 'Show'}
        </button>
      </div>

      <button className='button button-rounded mb-2'>Reset Password</button>

      {searchParams?.message && (
        <p className='bg-foreground/10 text-foreground mt-4 p-4 text-center'>
          {searchParams.message}
        </p>
      )}
      {errorMessage && (
        <p className='mt-2 text-sm text-red-500'>{errorMessage}</p>
      )}
    </form>
  );
};

export default ResetPasswordForm;
