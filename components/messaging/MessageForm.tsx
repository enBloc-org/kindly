'use client';
import React, { FormEvent, useState } from 'react';
import insertMessage from '@/utils/supabase/insertMessage';

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
    <form onSubmit={handleSubmit} className="flex justify-between m-2">
      <button type='submit'>
        <div
          className="ml-4 w-10 h-10 rounded-full p-2 flex gap-1 items-center border-primaryGreen border-solid border-2 ">

          <svg
            width='25'
            height='25'
            xmlns='http://www.w3.org/2000/svg'
            viewBox='0 0 512 512'
          >
            <path fill="#54BB89" d='M16.1 260.2c-22.6 12.9-20.5 47.3 3.6 57.3L160 376V479.3c0 18.1 14.6 32.7 32.7 32.7c9.7 0 18.9-4.3 25.1-11.8l62-74.3 123.9 51.6c18.9 7.9 40.8-4.5 43.9-24.7l64-416c1.9-12.1-3.4-24.3-13.5-31.2s-23.3-7.5-34-1.4l-448 256zm52.1 25.5L409.7 90.6 190.1 336l1.2 1L68.2 285.7zM403.3 425.4L236.7 355.9 450.8 116.6 403.3 425.4z' />
          </svg>
        </div>
      </button>
      <textarea
        className='min-h-max green-border-card input-text w-5/6'
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        placeholder='Type your message here'
        rows={10}
      />
    </form>
  );
};

export default MessageForm;
