'use client';
import { SyntheticEvent, useEffect, useState } from 'react';

export interface EnquireButtonProps {
  donorEmail: string;
  userEmail: string;
  title: string;
}

export default function EnquireButton({
  donorEmail,
  userEmail,
  title,
}: EnquireButtonProps) {
  const [isDisabled, setIsDisabled] = useState(false);
  const [messageSuccess, setMessageSuccess] = useState(false);
  const [error, setError] = useState(false);

  const subject = title;
  const message = `a user with email ${userEmail} is interested in your item`;

  useEffect(() => {
    if (isDisabled) {
      const sendMail = async () => {
        try {
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
            setIsDisabled(false);
            setError(true);
            throw new Error(`HTTP error! Status: ${response.status}`);
          }
          setMessageSuccess(true);
          setError(false);
        } catch (error) {
          console.error(error);
        }
      };
      sendMail();
    }
  }, [isDisabled]);

  const sumbitHandler = (e: SyntheticEvent) => {
    e.preventDefault();
    setIsDisabled(true);
  };

  return (
    <form className='flex flex-col items-center gap-5' onSubmit={sumbitHandler}>
      <button
        type='submit'
        className='button button-rounded disabled:bg-primaryGray'
        disabled={isDisabled}
      >
        <span>{messageSuccess ? 'MESSAGE SENT' : 'SEND MESSAGE'}</span>
      </button>
      {error && (
        <div className='text-primaryOrange text-center'>
          <p>There has been an error sending you message.</p>
          <p>Please try again.</p>
        </div>
      )}
    </form>
  );
}
