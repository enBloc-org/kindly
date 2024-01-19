'use client';
import React from 'react';

// refactor to import from supabase types
type MessageCardProps = {
  created_at: Date;
  sender_id: string;
  message_text: string;
  is_read: boolean;
};

const MessageCard: React.FC<MessageCardProps> = ({
  created_at,
  sender_id,
  message_text,
  is_read,
}) => {
  return (
    <div className='message-card__self'>
      <div className='absolute top-2 left-3'>
        <p>{sender_id}</p>
      </div>
      <div className='text-wrap mb-5'>
        <p>{message_text}</p>
      </div>
      <div className='flex justify-between'>
        <p>{`${created_at.getDate()}/${created_at.getMonth()}/${created_at.getFullYear()}`}</p>
        <span className={is_read ? 'text-secondaryGreen' : 'text-slate-500'}>
          {is_read ? '\u2713\u2713' : '\u2713'}
        </span>
      </div>
    </div>
  );
};

export default MessageCard;
