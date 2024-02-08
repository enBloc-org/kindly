import React, { createContext, useEffect, useState } from 'react';
import { createServerComponentClient } from '@supabase/auth-helpers-nextjs';
import { cookies } from 'next/headers';
import {
  AllConversationsType,
  ConversationCardType,
} from '@/utils/messaging/messagingTypes';

type ConversationProviderProps = {
  allConversations: AllConversationsType;
  setAllConversations: React.SetStateAction<AllConversationsType>;
  openConversation: ConversationCardType | null;
  setOpenConversation: React.Dispatch<
    React.SetStateAction<ConversationCardType>
  >;
};

const defaultContext: ConversationProviderProps = {
  allConversations: [],
  setAllConversations: () => [],
  openConversation: null,
  setOpenConversation: () => {},
};

const ConversationContext = createContext(defaultContext);

const ConversationProvider = ({
  children,
}: {
  children: React.FC;
}): React.FC => {
  const [allConversations, setAllConversations] =
    useState<AllConversationsType>([]);
  const [openConversation, setOpenConversation] =
    useState<ConversationCardType>();

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
