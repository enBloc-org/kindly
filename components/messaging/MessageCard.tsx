'use client';
import React from 'react';
import '../../app/styles/messaging-styles.css';

type MessageCardProps = {
  sender_id: string;
  created_at: string;
  message_text: string;
  is_read?: boolean;
  currentUser: string | undefined;
};

const MessageCard: React.FC<MessageCardProps> = ({
  sender_id,
  created_at,
  message_text,
  currentUser,
}) => {
  const isCurrentUser = sender_id === currentUser;

  return (
    <div
      className={`message-card ${isCurrentUser ? 'float-right bg-secondaryGray lg:left-24' : 'float-left bg-secondaryGreen lg:right-10'} my-2`}
    >
      <div className='mx-2 flex items-center justify-center'>
        <p
          className={`px-2 py-2 text-lg ${message_text.length > 50 && 'md:px-4'} preserve-whitespace lg:ml-10`}
        >
          {message_text}
        </p>
      </div>
      <div className={`${isCurrentUser && 'lg:mr-24'}`}>
        <p className='text-sm font-light lg:text-base'>{created_at}</p>
      </div>
    </div>
  );
};

export default MessageCard;
