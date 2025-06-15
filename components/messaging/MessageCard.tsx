'use client';
import React, { useEffect, useRef } from 'react';
import '../../app/styles/messaging-styles.css';
import markMessageAsRead from '@/supabase/models/messaging/markMessageAsRead';

type MessageCardProps = {
  senderId: string;
  createdAt: string;
  messageText: string;
  currentUser: string | undefined;
  messageId: number;
};

const MessageCard: React.FC<MessageCardProps> = ({
  senderId,
  createdAt,
  messageText,
  currentUser,
  messageId,
}) => {
  const isCurrentUser = senderId === currentUser;
  const messageRef = useRef(null);

  useEffect(() => {
    const OnRead = async () => {
      currentUser && (await markMessageAsRead(messageId, currentUser));
    };
    OnRead();
  }, []);

  return (
    <div
      className={`message-card ${isCurrentUser ? 'float-right bg-secondaryGray lg:left-24' : 'float-left bg-secondaryGreen lg:right-10'} justify-content my-2 flex flex-col-reverse`}
      ref={messageRef}
    >
      <div className='flex w-full items-center justify-center'>
        <p
          className={`px-0 text-sm ${messageText.length > 50 && 'md:px-4'} w-full whitespace-pre-wrap text-start lg:ml-10`}
        >
          {messageText}
        </p>
      </div>
      <div
        className={`${isCurrentUser && 'lg:mr-24'} align-center flex w-full flex-row justify-between`}
      >
        <p className='text-sm font-bold'>{`${isCurrentUser ? 'You' : currentUser}`}</p>
        <p className='text-sm font-light lg:text-base'>{createdAt}</p>
      </div>
    </div>
  );
};

export default MessageCard;
