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

const MessageCard: React.FC<MessageCardProps> = ({
  sender_id,
  created_at,
  message_text,
  is_read,
  currentUser,
}) => {
  const isCurrentUser = sender_id === currentUser;
  const dateStamp = created_at.slice(0, 10).replaceAll('-', ' ');

  return (
    <div className={`message-card ${isCurrentUser ? 'self' : ''}`}>
      <p
        className={`text-lg text-slate-500 ${isCurrentUser ? 'text-right' : 'text-left'}`}
      >
        {dateStamp}
      </p>
      <div className='m-1'>
        <p className='green-border-card m-1'>{message_text}</p>
      </div>
      <TickIcon read={is_read} />
    </div>
  );
};

export default MessageCard;
