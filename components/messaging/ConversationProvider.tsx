import React, { ReactNode, createContext, useEffect, useState } from 'react';
import { createServerComponentClient } from '@supabase/auth-helpers-nextjs';
import { cookies } from 'next/headers';
import {
  AllConversationsType,
  ConversationCardType,
} from '@/utils/messaging/messagingTypes';

type ConversationProviderProps = {
  allConversations: AllConversationsType;
  setAllConversations: React.Dispatch<
    React.SetStateAction<AllConversationsType>
  >;
  openConversation: ConversationCardType | undefined;
  setOpenConversation: React.Dispatch<
    React.SetStateAction<ConversationCardType>
  > | null;
};

const defaultContext: ConversationProviderProps = {
  allConversations: [],
  setAllConversations: () => [],
  openConversation: undefined,
  setOpenConversation: () => null,
};

const ConversationContext = createContext(defaultContext);

const ConversationProvider = ({ children }: { children: ReactNode }) => {
  const [allConversations, setAllConversations] =
    useState<AllConversationsType>([]);
  const [openConversation, setOpenConversation] =
    useState<ConversationCardType>(null);

  useEffect(() => {
    const fetchConversations = async () => {
      try {
        const supabase = createServerComponentClient({ cookies });
        const { data } = await supabase.auth.getSession();
        const userId = data.session?.user.id;

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
