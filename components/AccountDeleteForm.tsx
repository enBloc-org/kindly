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

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();

    if (userName === currentUserName) {
      submitHandler();
    } else {
      alert('The username you submitted is incorrect');
    }
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
            onChange={(event) => setUserName(event.target.value)}
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
      </form>
    </div>
  );
}
