import React, { createContext, useEffect, useState } from 'react';
import { createServerComponentClient } from '@supabase/auth-helpers-nextjs';
import { cookies } from 'next/headers';

type ContextProviderProps = {
  allConversations: ConversationType[],
  setAllConversations: React.Dispatch<React.SetStateAction<ConversationType[]>>,
  openConversation: ConversationType,
  setOpenConversation: React.Dispatch<React.SetStateAction<ConversationType>>,
}

const defaultContext:ContextProviderProps = {
  allConversations: any[] | null,
  setAllConversations: () => [],
  openConversation: {} | null,
  setOpenConversation: () => {},
};

const ConversationContext = createContext(defaultContext);

const ConversationProvider: React.FC<ConversationProviderProps> = ({
  children,
}) => {
  const [allConversations, setAllConversations] = useState([]);
  const [openConversation, setOpenConversation] = useState();

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

        setAllConversations(fetchedConversations);
      } catch (error) {
        console.error(`Failed to fetch conversations from database: ${error}`);
        throw error;
      }
    };
  });

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
