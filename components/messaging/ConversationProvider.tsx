'use client';
import React, { ReactNode, useEffect, useState } from 'react';
import {
  AllConversationsType,
  ConversationCardType,
} from '@/utils/messaging/messagingTypes';
import selectUserConversationsandItemNames from '@/utils/messaging/selectUserConversationsandItemNames';
import useConversation from '../../app/(dashboard)/conversations/useConversation';

const ConversationProvider = ({
  children,
  userId,
}: {
  children: ReactNode;
  userId: string;
}) => {
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

  useEffect(() => {
    const fetchConversations = async () => {
      const fetchedConversations =
        await selectUserConversationsandItemNames(userId);

      setAllConversations(fetchedConversations);
    };
    fetchConversations();
  }, []);

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
