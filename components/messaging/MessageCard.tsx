'use client';
import React from 'react';

import TickIcon from '../icons/tickIcon';

type MessageCardProps = {
  sent_by: number;
  created_at: Date;
  message_text: string;
  is_read: boolean;
  currentUser: number;
};

const MessageCard: React.FC<MessageCardProps> = async ({
  sent_by,
  created_at,
  message_text,
  is_read,
  currentUser,
}) => {
  const isCurrentUser = sent_by === currentUser;

  return (
    <div className={`message-card${isCurrentUser ? '__self' : '__other'}`}>
      <div className='m-1'>
        <p className='m-1'>{message_text}</p>
      </div>
      <div
        className={`flex ${isCurrentUser ? 'justify-between' : 'float-right'}`}
      >
        <p className='text-slate-600'>{`${created_at.getDate()}/${created_at.getMonth()}/${created_at.getFullYear()}`}</p>
        {isCurrentUser && <TickIcon read={is_read} />}
      </div>
    </div>
  );
};

export default MessageCard;
