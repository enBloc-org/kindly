'use client';
import { FormEvent, useState } from 'react';

export default function AccountDeleteForm({
  currentUserName,
  submitHandler,
}: {
  currentUserName: string;
  submitHandler: () => void;
}) {
  const [userName, setUserName] = useState('');
  const [errorMessage, setErrorMessage] = useState<string>('');

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();

    if (userName === currentUserName) {
      submitHandler();
    } else {
      setErrorMessage('The username you submitted is incorrect');
    }
  };

  const inputChangeHandler = (input: string) => {
    if (errorMessage.length > 0) setErrorMessage('');

    setUserName(input);
  };

  return (
    <div>
      <form
        onSubmit={(event) => handleSubmit(event)}
        className='text-foreground flex flex-1  flex-col  items-center justify-center gap-4'
      >
        <label htmlFor='confirmation-input'>
          Please confirm your username below to delete your account
        </label>
        <div className='relative h-min flex-row items-center'>
          <input
            id='confirmation-input'
            value={userName}
            name='user-confirmation'
            onChange={(event) => inputChangeHandler(event.target.value)}
            placeholder={currentUserName}
            className='mb-2 rounded border border-primaryGreen bg-white p-2 shadow'
          />
          <button
            className={`absolute right-3 top-2 h-max ${userName.length === 0 && 'text-slate-200'}`}
            disabled={userName.length === 0}
          >
            ⏎
          </button>
        </div>
        {errorMessage.length > 0 && (
          <p className='mt-2 text-sm text-red-500'>{errorMessage}</p>
        )}
      </form>
    </div>
  );
}
