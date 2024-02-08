'use client';
import React, { ReactNode, createContext, useEffect, useState } from 'react';
import {
  AllConversationsType,
  ConversationCardType,
} from '@/utils/messaging/messagingTypes';
import newClient from '@/config/supabaseclient';

type ConversationProviderProps = {
  allConversations: AllConversationsType;
  setAllConversations: React.Dispatch<
    React.SetStateAction<AllConversationsType>
  >;
  openConversation: ConversationCardType;
  setOpenConversation: React.Dispatch<
    React.SetStateAction<ConversationCardType>
  > | null;
};

const defaultContext: ConversationProviderProps = {
  allConversations: [],
  setAllConversations: () => [],
  openConversation: {
    joined_at: new Date().toString(),
    conversation_id: 2,
    user_id: 'default',
    conversations: {
      id: 1,
      messages: [],
      created_at: new Date().toString(),
    },
  },
  setOpenConversation: () => null,
};

export const ConversationContext = createContext(defaultContext);

const ConversationProvider = ({
  children,
  userId,
}: {
  children: ReactNode;
  userId: string;
}) => {
  const [allConversations, setAllConversations] =
    useState<AllConversationsType>([]);
  const [openConversation, setOpenConversation] =
    useState<ConversationCardType>(null);

  useEffect(() => {
    const fetchConversations = async () => {
      try {
        const supabase = newClient();
        const { data: fetchedConversations } = await supabase
          .from('user_conversations')
          .select('*, conversations(*, messages(*))')
          .eq('user_id', userId);

        setAllConversations(fetchedConversations ?? []);
        setOpenConversation(allConversations[0]);
      } catch (error) {
        console.error(`Failed to fetch conversations from database: ${error}`);
        throw error;
      }
    };

    fetchConversations();
  }, []);

  return (
    <ConversationContext.Provider
      value={{
        allConversations,
        setAllConversations,
        openConversation,
        setOpenConversation,
      }}
    >
      {children}
    </ConversationContext.Provider>
  );
};

export default ConversationProvider;
