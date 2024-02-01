'use client';
import editRow from '@/utils/supabase/editRow';
import { SyntheticEvent, useEffect, useState } from 'react';

export interface EnquireButtonProps {
  donorEmail: string;
  userEmail: string;
  title: string;
  item_id: string;
  user_id: string;
}

export default function EnquireButton({
  donorEmail,
  userEmail,
  title,
  item_id,
  user_id,
}: EnquireButtonProps) {
  const [isDisabled, setIsDisabled] = useState(false);
  const [messageSuccess, setMessageSuccess] = useState(false);
  const [error, setError] = useState(false);

  const subject = title;
  const message = `${userEmail} is interested in your item. Please send them an email to get the conversation started.`;

  useEffect(() => {
    if (isDisabled) {
      const sendMail = async () => {
        try {
          const response = await fetch('/api/send-email', {
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
          await editRow(
            'items',
            { reserved: true, reserved_by: user_id },
            'id',
            item_id
          );
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
        <span>ENQUIRE</span>
      </button>
      {error && (
        <div className='text-center text-primaryOrange'>
          <p>There has been an error sending you message.</p>
          <p>Please try again.</p>
        </div>
      )}
      {messageSuccess && (
        <div className='px-3 text-center text-sm'>
          <p>Your registered email address has been sent to this user.</p>
          <p>Please look out for a response.</p>
        </div>
      )}
    </form>
  );
}
