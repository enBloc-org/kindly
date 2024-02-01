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
    <form onSubmit={handleSubmit}>
      <textarea
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        placeholder='Type your message here'
        rows={10}
      />
      <button type='submit'>Send Message</button>
    </form>
  );
};

export default MessageForm;
