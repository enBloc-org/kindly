'use client';
import React, { ReactNode, useEffect, useState } from 'react';
import {
  AllConversationsType,
  ConversationCardType,
} from '@/utils/messaging/messagingTypes';
import useConversation from '../../app/(dashboard)/conversations/useConversation';
import newClient from '@/config/supabaseclient';

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
    useState<ConversationCardType>({
      joined_at: new Date().toString(),
      conversation_id: 2,
      user_id: 'default',
      conversations: {
        id: 1,
        messages: [],
        created_at: new Date().toString(),
      },
    });

  useEffect(() => {
    const fetchConversations = async () => {
      try {
        const supabase = newClient();
        const { data: fetchedConversations } = await supabase
          .from('user_conversations')
          .select('*, conversations(*, messages(*))')
          .eq('user_id', userId);

        setAllConversations(fetchedConversations ?? []);
        setOpenConversation && setOpenConversation(allConversations[0]);
      } catch (error) {
        console.error(`Failed to fetch conversations from database: ${error}`);
        throw error;
      }
    };

    fetchConversations();
  }, []);

  return (
    <useConversation.Provider
      value={{
        allConversations,
        setAllConversations,
        openConversation,
        setOpenConversation,
      }}
    >
      {children}
    </useConversation.Provider>
  );
};

export default ConversationProvider;
