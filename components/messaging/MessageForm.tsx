'use client';
import React, { FormEvent } from 'react';
import { useState } from 'react';
import insertMessage from '@/utils/supabase/insertMessage';

const MessageForm = () => {
  const handleSubmit = (e: FormEvent) => {
    e.preventDefault;

    insertMessage(message)
    console.log(message);

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
