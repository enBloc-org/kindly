'use client';
import React, { FormEvent, useState } from 'react';
import insertMessage from '@/utils/supabase/insertMessage';
import PaperPlaneIcon from '../icons/PaperPlaneIcon';

type MessageFormProps = {
  user_id: string;
  conversation_id: number;
};

const MessageForm: React.FC<MessageFormProps> = ({
  user_id,
  conversation_id,
}) => {
  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    console.log({ user_id, conversation_id });

    await insertMessage(user_id, conversation_id, message);
    setMessage('');
  };
  const [message, setMessage] = useState<string>('');

  return (
    <form
      onSubmit={handleSubmit}
      className='m-2 flex justify-between text-black'
    >
      <textarea
        className='green-border-card input-text min-h-max w-5/6 px-4 py-2 text-black'
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        placeholder='Type your message here'
        rows={10}
      />
      <button type='submit'>
        <div className='m-2 flex h-10 w-10 items-center gap-1 rounded-full border-2 border-solid border-primaryGreen p-2 '>
          <PaperPlaneIcon></PaperPlaneIcon>
        </div>
      </button>
    </form>
  );
};

export default MessageForm;
