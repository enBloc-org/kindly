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
    <div className='w-5/6 rounded-lg bg-backgroundHighlight p-5'>
      <p className='mb-2 font-bold'>We are sorry to see you go</p>
      <p className='text-wrap w-3/4'>
        We hope you have found Kindly helpful and will consider coming back
        another time.
        <br />
        Any help is greatly appreciated.
      </p>
      <form onSubmit={(event) => handleSubmit(event)} className='m-3'>
        <label htmlFor='confirmation-input'>
          Please confirm your username below to delete your account
        </label>
        <div className='m-1 flex w-fit flex-row items-center rounded-md bg-white p-1'>
          <input
            id='confirmation-input'
            value={userName}
            name='user-confirmation'
            onChange={(event) => inputChangeHandler(event.target.value)}
            placeholder={currentUserName}
            className='p-1'
          />
          <button
            className={`h-max bg-white ${userName.length === 0 && 'text-slate-200'}`}
            disabled={userName.length === 0}
          >
            X
          </button>
        </div>
        {errorMessage.length > 0 && (
          <p className='mt-2 text-sm text-red-500'>{errorMessage}</p>
        )}
      </form>
    </div>
  );
}
