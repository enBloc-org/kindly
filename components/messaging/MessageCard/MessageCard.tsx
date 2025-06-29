'use client';
import React, { useEffect, useRef, useState } from 'react';
import '../styles/messaging-styles.css';
import markMessageAsRead from '@/supabase/models/messaging/markMessageAsRead';
import ReadReceiptIcon from '../../icons/messaging/ReadReceiptIcon';
import { getProfile } from '@/supabase/models/getProfile';

type MessageCardProps = {
  senderId: string;
  createdAt: string;
  messageText: string;
  currentUser: string | undefined;
  messageId: number;
  isRead: boolean;
};

const MessageCard: React.FC<MessageCardProps> = ({
  senderId,
  createdAt,
  messageText,
  currentUser,
  messageId,
  isRead,
}) => {
  const isCurrentUser = senderId === currentUser;
  const messageRef = useRef(null);
  const [userName, setUserName] = useState<string>('');

  useEffect(() => {
    const OnRead = async () => {
      currentUser && (await markMessageAsRead(messageId, currentUser));
    };
    OnRead();

    const getUserName = async () => {
      const {
        data: { username },
      } = await getProfile(currentUser);
      setUserName(username as string);
    };
    getUserName();
  }, []);

  return (
    <div
      dir={`${isCurrentUser ? 'ltr' : 'rtl'}`}
      className={`message-card ${isCurrentUser ? 'float-right bg-brand-80' : 'float-left bg-secondaryGray lg:right-2'} justify-content my-2 flex flex-col-reverse`}
      ref={messageRef}
    >
      <div className='flex w-full items-center justify-center'>
        <p
          className={`px-0 text-sm ${messageText.length > 50 && 'md:px-4'} w-full whitespace-pre-wrap text-left lg:ml-10`}
        >
          {messageText}
        </p>
      </div>
      <div
        className={`${isCurrentUser ? 'flex-row lg:mr-24' : 'flex-row-reverse text-end'} align-center flex w-full justify-between`}
      >
        <p className='text-sm font-bold'>{`${isCurrentUser ? 'You' : userName}`}</p>
        <div className='align-center flex w-fit justify-between'>
          <p className='mr-1 text-sm font-light lg:text-base'>{createdAt}</p>
          {isCurrentUser && <ReadReceiptIcon isRead={isRead} />}
        </div>
      </div>
    </div>
  );
};

export default MessageCard;
