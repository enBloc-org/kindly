'use client';
import { useState } from 'react';

type AuthFormProps = {
  onSubmit: (formData: FormData) => Promise<void>;
  buttonText: string;
  searchParams?: { message: string };
  isSignUp: boolean;
};

const AuthForm: React.FC<AuthFormProps> = ({
  onSubmit,
  buttonText,
  searchParams,
  isSignUp,
}) => {
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [isEmailAgreed, setIsEmailAgreed] = useState(false);
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const handleTogglePassword = () => {
    setShowPassword(!showPassword);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (isSignUp && !isEmailAgreed) {
      setErrorMessage('Please agree to share your email address.');
      return;
    }

    if (isSignUp && password !== confirmPassword) {
      setErrorMessage("Passwords don't match");
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
        setErrorMessage('An unexpected error occurred');
      }
    }
  };

  return (
    <form
      className=' text-foreground flex flex-1  flex-col  items-center justify-center gap-4'
      onSubmit={handleSubmit}
    >
      {' '}
      {isSignUp && (
        <>
          <label className='text-md' htmlFor='user_name'>
            Username
          </label>
          <input
            className='mb-2 rounded border border-primaryGreen bg-white p-2 shadow'
            id='user_name'
            name='user_name'
            placeholder='Your Username'
            required
          />
        </>
      )}
      <label className='text-md' htmlFor='email'>
        Email
      </label>
      <input
        className='mb-2 rounded border border-primaryGreen bg-white p-2 shadow'
        type='email'
        autoComplete='email'
        id='email'
        name='email'
        placeholder='you@example.com'
        required
      />
      <label className='text-md' htmlFor='password'>
        Password
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
      {isSignUp && (
        <>
          <label className='text-md' htmlFor='confirmPassword'>
            Confirm Password
          </label>
          <input
            className='mb-2 rounded border border-primaryGreen bg-white p-2 shadow'
            type='password'
            id='confirmPassword'
            name='password'
            placeholder='••••••••'
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
          />
          <div>
            <input
              type='checkbox'
              id='agreeCheckbox'
              checked={isEmailAgreed}
              onChange={() => setIsEmailAgreed(!isEmailAgreed)}
              required
            />
            <label htmlFor='agreeCheckbox' className='ml-2'>
              I agree to share my email address with the donors from this app.
            </label>
          </div>
        </>
      )}
      {isSignUp && (
        <div>
          <input type='checkbox' id='isRefugee' name='refugee' value='true' />
          <label htmlFor='isRefugee' className='ml-2'>
            If you are a refugee wishing to receive items check here
          </label>
        </div>
      )}
      <button className='button button-rounded mt-1'>{buttonText}</button>
      {searchParams?.message && (
        <p className='error-message mt-4 p-4 text-center'>
          {searchParams.message}
        </p>
      )}
      {errorMessage && (
        <p className='mt-2 text-sm text-red-500'>{errorMessage}</p>
      )}
    </form>
  );
};

export default AuthForm;
