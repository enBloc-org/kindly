'use client';
import React, { FormEvent, useState } from 'react';
import insertMessage from '@/utils/messaging/insertMessage';
import PaperPlaneIcon from '../icons/PaperPlaneIcon';

type MessageFormProps = {
  user_id: string | undefined;
  conversation_id: number | undefined;
};

const MessageForm: React.FC<MessageFormProps> = ({
  user_id,
  conversation_id,
}) => {
  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    try {
      await insertMessage(user_id, conversation_id, message);
      setMessage('');
    } catch (error) {
      console.error(`Failed to fetch messages from database: ${error}`);
      throw error;
    }
  };
  const [message, setMessage] = useState<string>('');

  return (
    <form
      onSubmit={handleSubmit}
      className='mt-2 flex items-center justify-center gap-6 bg-gray-200 p-4'
    >
      <textarea
        className='message-components-focus h-20 min-h-max w-5/6 resize-none rounded-lg border-2
           border-gray-300 bg-white px-4 py-2 text-black shadow-inner'
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        placeholder='Type your message here'
        rows={10}
      />
      <button
        type='submit'
        className='message-components-focus m-2 flex h-10 w-10 items-center gap-1 rounded-full 
          border-2 border-solid border-primaryGreen p-2'
      >
        <PaperPlaneIcon />
      </button>
    </form>
  );
};

export default MessageForm;
