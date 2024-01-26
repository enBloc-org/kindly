'use client';
import React, { FormEvent } from 'react';
import { useState } from 'react';

const NewMesssage = () => {
  const handleSubmit = (e: FormEvent) => {
    e.preventDefault;

    // use model function here to insert message into database
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
        rows={10} // You can adjust the number of rows
      />
      <button type='submit'>Send Message</button>
    </form>
  );
};

export default NewMesssage;
