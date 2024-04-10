'use client';
import React, { useEffect, useRef } from 'react';
import '../../app/styles/messaging-styles.css';
import { markAsRead } from '@/utils/messaging/markMessageAsRead';

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
      currentUser && (await markAsRead(messageId, currentUser));
    };
    OnRead();
  }, []);

  return (
    <div
      className={`message-card ${isCurrentUser ? 'float-right bg-secondaryGray lg:left-24' : 'float-left bg-secondaryGreen lg:right-10'} my-2`}
      ref={messageRef}
    >
      <div className='mx-2 flex items-center justify-center'>
        <p
          className={`px-2 py-2 text-lg ${messageText.length > 50 && 'md:px-4'} whitespace-pre-wrap lg:ml-10`}
        >
          {messageText}
        </p>
      </div>
      <div className={`${isCurrentUser && 'lg:mr-24'}`}>
        <p className='text-sm font-light lg:text-base'>{createdAt}</p>
      </div>
    </div>
  );
};

export default MessageCard;
