'use client';
import React from 'react';

import TickIcon from '../icons/tickIcon';

type MessageCardProps = {
  sender_id: string;
  created_at: string;
  message_text: string;
  is_read: boolean;
  currentUser: string;
};

const MessageCard: React.FC<MessageCardProps> = async ({
  sender_id,
  created_at,
  message_text,
  is_read,
  currentUser,
}) => {
  const isCurrentUser = sender_id === currentUser;

  return (
    <div className={`message-card${isCurrentUser ? '__self' : '__other'}`}>
      <div>
        <p>{isCurrentUser ? 'me' : sender_id}</p>
      </div>
      <div className='m-1'>
        <p className='m-1'>{message_text}</p>
      </div>
      <div
        className={`flex ${isCurrentUser ? 'justify-between' : 'float-right'}`}
      >
        <p className='text-slate-600'>{created_at}</p>
        {isCurrentUser && <TickIcon read={is_read} />}
      </div>
    </div>
  );
};

export default MessageCard;
