'use client';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import startNewConversation from '@/supabase/models/messaging/startNewConversation';
import { useEffect } from 'react';
import { useConversationContext } from '../../context/conversationContext';

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
  item_id: number;
}) {
  const subject = title;
  const message = `Someone is interested in your item. Please check your messages to get the conversation started.`;
  const [isDisabled, setIsDisabled] = useState(false);
  const [error, setError] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const router = useRouter();
  const { dispatch } = useConversationContext();

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
        } catch (error) {
          console.error(error);
        }
      };
      sendMail();
    }
  }, [isDisabled]);
  const clickHandler = async () => {
    try {
      setIsDisabled(true);
      setErrorMessage('');
      setError(false);

      const conversation = await startNewConversation(userId, donorId, item_id);

      if (conversation) {
        dispatch({
          type: 'SET_CURRENT_CONVERSATION',
          payload: conversation,
        });
        dispatch({ type: 'SET_SHOW_CONVERSATIONS_LIST', payload: false });
      }

      router.push('/conversations');
    } catch (error) {
      console.log(error);
      setErrorMessage('Failed to start a new conversation. Please try again.');
      setError(true);
      setIsDisabled(false);
    }
  };

  return (
    <div>
      <button
        className='button button-rounded my-2 disabled:bg-primaryGray'
        disabled={isDisabled}
        onClick={clickHandler}
      >
        MESSAGE
      </button>
      {error && (
        <p className='text-center italic text-primaryOrange'>{errorMessage}</p>
      )}
    </div>
  );
}
