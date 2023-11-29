'use client';

export interface EnquireButtonProps {
  donorEmail: string;
  userEmail: string;
  title: string;
}

import { SyntheticEvent } from 'react';

export default async function EnquireButton({
  donorEmail,
  userEmail,
  title,
}: EnquireButtonProps) {
  const subject = title;
  const message = `a user with email ${userEmail} is interested in your item`;

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
        donorEmail,
      }),
    });
    if (!response.ok) {
      // Check for non-2xx HTTP status codes
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
  };
  return (
    <form onSubmit={sendMail}>
      <button type='submit' className='button button-rounded'>
        <span>SEND MESSAGE</span>
      </button>
    </form>
  );
}
