'use client';
import { SetStateAction, Dispatch, useState, useEffect } from 'react';
import { createSupabaseClient } from '@/utils/supabase/supabaseClient';
import {
  AllConversationsType,
  ConversationCardType,
} from '@/utils/messaging/messagingTypes';
import ConversationCard from './ConversationCard';

type ConversationsListProps = {
  allConversations: AllConversationsType;
  setOpenConvo: Dispatch<SetStateAction<ConversationCardType>>;
};

const ConversationsList: React.FC<ConversationsListProps> = ({
  allConversations,
  setOpenConvo,
}) => {
  const updateOpenConvo = async (i: number) => {
    setOpenConvo(allConversations[i]);
  };

  const [conversationsList, setConversationsList] =
    useState<AllConversationsType>(allConversations);
  const supabase = createSupabaseClient;

  useEffect(() => {
    const channel = supabase
      .channel('realtime conversations')
      .on(
        'postgres_changes',
        {
          event: 'INSERT',
          schema: 'public',
          table: 'user_conversations',
        },
        (payload) => {
          console.log({ payload });
          setConversationsList([
            ...conversationsList,
            payload.new as ConversationCardType,
          ]);
        }
      )
      .subscribe();

    return () => {
      supabase.removeChannel(channel);
    };
  }, [supabase, conversationsList, setConversationsList]);

  return (
    <>
      {conversationsList.map((conversation, index) => (
        <div key={`${conversation.id}-${index}`}>
          <ConversationCard
            senderUsername={
              conversation.conversations.user_conversations[1].profiles.username
            }
            // conversations={conversation.conversations}
            clickHandler={() => updateOpenConvo(index)}
          />
        </div>
      ))}
    </>
  );
};
export default ConversationsList;
