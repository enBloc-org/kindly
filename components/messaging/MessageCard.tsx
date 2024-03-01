'use client';
import React from 'react';
import TickIcon from '../icons/tickIcon';
import '../../app/styles/messaging-styles.css'

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
    <div
      className={`message-card ${isCurrentUser ? 'float-right' : 'float-left'} my-2`}
    >
      <p
        className={`text-lg text-slate-500 ${isCurrentUser ? 'mr-2 text-right' : 'ml-2 text-left'}`}
      >
        {dateStamp}
      </p>
      <div>
        <p className='green-border-card'>{message_text}</p>
      </div>
      {isCurrentUser && (
        <div className='relative float-right mr-4'>
          <TickIcon read={is_read} />
        </div>
      )}
    </div>
  );
};

export default MessageCard;
