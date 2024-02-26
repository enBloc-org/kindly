'use client';
import React, { ReactNode, useState } from 'react';
import {
  AllConversationsType,
  ConversationCardType,
} from '@/types/messagingTypes';
import useConversation from '../../app/(dashboard)/conversations/useConversation';

const ConversationProvider = ({ children }: { children: ReactNode }) => {
  const [allConversations, setAllConversations] =
    useState<AllConversationsType>([]);

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
  const [showConversationsList, setShowConversationsList] = useState(false);

  return (
    <useConversation.Provider
      value={{
        allConversations,
        setAllConversations,
        currentConversation,
        setCurrentConversation,
        showConversationsList,
        setShowConversationsList,
      }}
    >
      {children}
    </useConversation.Provider>
  );
};

export default ConversationProvider;
