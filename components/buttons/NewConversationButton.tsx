'use client';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import startNewConversation from '@/supabase/models/messaging/startNewConversation';
import { useEffect } from 'react';
import editRow from '@/supabase/models/editRow';

export default function NewConversationButton({
  userId,
  donorId,
  donorEmail,
  title,
  item_id,
}: {
  userId: string | undefined;
  donorId: string;
  donorEmail: string;
  title: string;
  item_id: string;
}) {
  const subject = title;
  const message = `Someone is interested in your item. Please check your messages to get the conversation started.`;
  const [isDisabled, setIsDisabled] = useState(false);
  const [error, setError] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const router = useRouter();
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
          setError(false);
          await editRow(
            'items',
            { is_reserved: true, reserved_by: userId ?? '' },
            'id',
            item_id
          );
        } catch (error) {
          console.error(error);
        }
      };
      console.log('effect ran');
      sendMail();
    }
  }, [isDisabled]);
  const clickHandler = async () => {
    try {
      setIsDisabled(true);
      setErrorMessage('');
      setError(false);

      await startNewConversation(userId, donorId, item_id);

      router.push('/conversations');
    } catch (error) {
      console.log(error);
      setErrorMessage('Failed to start a new conversation. Please try again.');
      setError(true);
      setIsDisabled(false);
    }
  };

  return (
    <>
      <button
        className='button button-rounded disabled:bg-primaryGray'
        disabled={isDisabled}
        onClick={clickHandler}
      >
        MESSAGE
      </button>
      {error && (
        <p className='text-center italic text-primaryOrange'>{errorMessage}</p>
      )}
    </>
  );
}
