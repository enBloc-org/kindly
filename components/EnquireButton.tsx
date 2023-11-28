'use client';

import { SyntheticEvent } from 'react';

export default function EnquireButton() {
  const subject = 'test sub';
  const message = 'test mes';

  const sendMail = async (e: SyntheticEvent) => {
    e.preventDefault();

    const response = await fetch('/api/sendEmail', {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify({
        subject,
        message,
      }),
    });
    console.log(await response.json());
  };
  return (
    <form onSubmit={sendMail} className='h-full w-1/3 space-y-6'>
      <button
        type='submit'
        className='ml-auto flex w-1/2 items-center justify-center space-x-3 rounded-lg bg-blue-600 p-2 text-white shadow-blue-500 hover:bg-blue-700 hover:shadow-md'
      >
        <span>Send Message</span>
      </button>
    </form>
  );
}
