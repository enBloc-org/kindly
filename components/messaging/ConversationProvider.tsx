'use client';
import React, { ReactNode, useState } from 'react';
import {
  AllConversationsType,
  ConversationCardType,
} from '@/utils/messaging/messagingTypes';
import useConversation from '../../app/(dashboard)/conversations/useConversation';

const ConversationProvider = ({
  children,
  conversations,
}: {
  children: ReactNode;
  userId: string;
  conversations: AllConversationsType;
}) => {
  const [allConversations, setAllConversations] =
    useState<AllConversationsType>(conversations);

  const [currentConversation, setCurrentConversation] =
    useState<ConversationCardType>({
      id: 2,
      joined_at: new Date().toString(),
      conversation_id: 2,
      user_id: 'default',
      item_id: 2,
      items: {
        imageSrc: 'default',
        item_name: 'default',
      },
    });

  return (
    <useConversation.Provider
      value={{
        allConversations,
        setAllConversations,
        currentConversation,
        setCurrentConversation,
      }}
    >
      {children}
    </useConversation.Provider>
  );
};

export default ConversationProvider;
