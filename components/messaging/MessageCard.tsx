'use client';
import React from 'react';
import TickIcon from '../icons/tickIcon';
import '../../app/styles/messaging-styles.css';

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
  console.log(created_at);

  return (
    <div
      className={`message-card ${isCurrentUser ? 'float-right bg-secondaryGray' : 'float-left bg-secondaryGreen'} my-2`}
    >
      <div className='mx-2 flex items-center justify-center'>
        <p className='text-lg'>{message_text}</p>
      </div>
      <div className='flex flex-1 flex-col items-end justify-between gap-2'>
        <p className='text-sm font-light'>13:40</p>
        <TickIcon read={is_read} />
      </div>
    </div>
  );
};

export default MessageCard;
