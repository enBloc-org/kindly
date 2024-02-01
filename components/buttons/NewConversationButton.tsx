'use client';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import newConvoStart from '@/utils/supabase/newConvoStart';

export default function NewConversationButton({
  userId,
  donorId,
}: {
  userId: string | undefined;
  donorId: string | undefined;
}) {
  const [isDisabled, setIsDisabled] = useState(false);
  const [error, setError] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const router = useRouter();

  const clickHandler = async () => {
    try {
      setIsDisabled(true);
      setErrorMessage('');
      setError(false);
      await newConvoStart(userId, donorId);
      await router.push('/conversations');
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
