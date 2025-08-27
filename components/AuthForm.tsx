'use client';
import { useUser } from '@/context/UserProvider';
import { profile } from '@/types/supabaseTypes';
import { useRouter } from 'next/navigation';
import { useState, useEffect } from 'react';

import Input from '@/components/form/Input';
import Link from 'next/link';
import MainButton from './buttons/MainButton/MainButton';

type AuthFormProps = {
  onSubmit: (formData: FormData) => Promise<profile | undefined>;
  buttonText: string;
  searchParams?: { message?: string };
  externalErrorMessage?: string | null;
  isSignUp: boolean;
};

const AuthForm: React.FC<AuthFormProps> = ({
  onSubmit,
  buttonText,
  searchParams,
  externalErrorMessage,
  isSignUp,
}) => {
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [isEmailAgreed, setIsEmailAgreed] = useState(false);
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [email, setEmail] = useState('');
  const [formErrors, setFormErrors] = useState<Record<string, string>>({});
  const [isRefugee, setIsRefugee] = useState(false);
  const { setUser } = useUser();
  const router = useRouter();

  useEffect(() => {
    if (externalErrorMessage) {
      setErrorMessage(externalErrorMessage);
    } else if (searchParams?.message) {
      setErrorMessage(searchParams.message);
    }
  }, [searchParams?.message, externalErrorMessage]);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const form = e.currentTarget;
    const formData = new FormData(form);
    const errors: Record<string, string> = {};

    if (!formData.get('email')) {
      errors.email = 'This field is required';
    }

    if (!formData.get('password')) {
      errors.password = 'This field is required';
    }

    if (isSignUp) {
      if (!formData.get('user_name')) {
        errors.user_name = 'This field is required';
      }
      if (!formData.get('sur_name')) {
        errors.sur_name = 'This field is required';
      }
      if (!confirmPassword) {
        errors.confirmPassword = 'This field is required';
      }
      if (password !== confirmPassword) {
        errors.confirmPassword = "Passwords don't match";
      }
      if (!isEmailAgreed) {
        setErrorMessage('Please agree to share your email address.');
        return;
      }
    }

    if (Object.keys(errors).length > 0) {
      setFormErrors(errors);
      return;
    }

    setFormErrors({});
    setErrorMessage(null);

    try {
      const userProfile = await onSubmit(formData);
      if (!userProfile) {
        setErrorMessage('Sign up failed. Please check your details.');
        return;
      }
      setUser(userProfile);
      if (!isSignUp) {
        router.push('/');
      }
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
      className='mx-auto mt-10 flex flex-col gap-6 p-4'
      onSubmit={handleSubmit}
    >
      {!isSignUp && (
        <>
          <Input
            label='Email'
            type='email'
            placeholder='Enter your email'
            name='email'
            onChange={(e) => setEmail(e.target.value)}
            required
            autoComplete='email'
            value={email}
            className='md:min-w-[712px]'
            error={formErrors.email}
          />

          <Input
            label='Password'
            type='password'
            id='password'
            name='password'
            placeholder='Enter password'
            autoComplete='current-password'
            onChange={(e) => setPassword(e.target.value)}
            className='md:min-w-[712px]'
            required
            error={formErrors.password}
          />

          <Link href='/login/forgot-password'>
            <span className='text-sm text-base-100'>Forgot your password?</span>
          </Link>

          <MainButton
            size='small'
            type='submit'
            variant='primary'
            ariaLabel='Submit button'
            clickHandler={() => handleSubmit}
          >
            {buttonText}
          </MainButton>

          <p className='text-base'>
            Don’t have an account?{' '}
            <Link href='/signup'>
              <span className='ml-2 font-bold text-brand-100'>Sign up</span>
            </Link>
          </p>
        </>
      )}

      {isSignUp && (
        <>
          <Input
            label='Email'
            type='email'
            placeholder='Enter your email'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className='md:min-w-[712px]'
            name='email'
            error={formErrors.email}
          />

          <div className='flex flex-col flex-wrap justify-between gap-2 md:flex-row'>
            <Input
              label='First name'
              type='text'
              placeholder='Enter first name'
              name='user_name'
              required
              error={formErrors.user_name}
            />
            <Input
              label='Surname'
              type='text'
              placeholder='Enter surname'
              name='sur_name'
              required
              error={formErrors.sur_name}
            />
          </div>

          <div className='flex flex-col flex-wrap justify-between gap-2 md:flex-row'>
            <Input
              label='Password'
              type='password'
              placeholder='Enter password'
              name='password'
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              error={formErrors.password}
            />
            <Input
              label='Repeat password'
              type='password'
              placeholder='Repeat password'
              name='confirmPassword'
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
              error={formErrors.confirmPassword}
            />
          </div>

          <div className='flex flex-col items-start md:w-full md:flex-row md:items-center'>
            <div>
              <p className='text-base font-medium'>
                Are you Ukrainian refugee?
              </p>
              <p className='mb-2 text-sm font-extralight text-base-120'>
                (Ukrainian refugees receive items for free)
              </p>
            </div>

            <div className='flex h-7 w-fit items-center justify-center justify-center rounded-full bg-gray-100 md:ml-8'>
              <button
                type='button'
                className={`h-7 rounded-full px-6 transition-colors ${
                  isRefugee ? 'bg-neutral-800 text-white' : 'text-black'
                }`}
                onClick={() => setIsRefugee(true)}
              >
                Yes
              </button>
              <button
                type='button'
                className={`h-7 rounded-full px-6 transition-colors ${
                  !isRefugee ? 'bg-neutral-800 text-white' : 'text-black'
                }`}
                onClick={() => setIsRefugee(false)}
              >
                No
              </button>
            </div>

            <input
              type='hidden'
              name='refugee'
              value={isRefugee ? 'true' : 'false'}
            />
          </div>

          <div className='flex w-[358px] items-center gap-2 md:w-full'>
            <input
              type='checkbox'
              id='agreeCheckbox'
              checked={isEmailAgreed}
              onChange={() => setIsEmailAgreed(!isEmailAgreed)}
              required
              className='my-4 h-[18px] w-[18px] accent-black'
            />
            <label htmlFor='agreeCheckbox' className='ml-2'>
              I agree to share my email address with the donors from this app.
            </label>
          </div>

          <MainButton
            size='small'
            type='submit'
            variant='primary'
            ariaLabel='Submit button'
            clickHandler={() => handleSubmit}
          >
            {buttonText}
          </MainButton>

          <p className='text-base'>
            Already have an account?{' '}
            <Link href='/login'>
              <span className='ml-2 font-bold text-brand-100'>Log in</span>
            </Link>
          </p>
        </>
      )}

      <div className='w-full md:w-[712px]'>
        {errorMessage && (
          <p className='error-message p-4 text-center'>{errorMessage}</p>
        )}
      </div>
    </form>
  );
};

export default AuthForm;
