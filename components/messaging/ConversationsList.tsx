'use client';
import ConversationCard from './ConversationCard';
import { useContext, useEffect } from 'react';
import useConversation from '../../app/(dashboard)/conversations/useConversation';
import { createSupabaseClient } from '@/utils/supabase/supabaseClient';
import { ConversationCardType } from '@/utils/messaging/messagingTypes';

const ConversationsList: React.FC = () => {
  const { allConversations, setAllConversations, setOpenConversation } =
    useContext(useConversation);
  const supabase = createSupabaseClient;

  const updateOpenConvo = async (givenId: number) => {
    setOpenConversation &&
      setOpenConversation(
        allConversations?.filter(
          (conversations) => conversations.conversation_id === givenId
        )[0]
      );
  };

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
          setAllConversations([
            ...allConversations,
            payload.new as ConversationCardType,
          ]);
        }
      )
      .subscribe();

    return () => {
      supabase.removeChannel(channel);
    };
  }, [supabase, allConversations, setAllConversations]);

  return (
    <>
      {allConversations.length > 0 ? (
        allConversations.map((conversation, index) => (
          <div key={`${conversation.id}-${index}`}>
            <ConversationCard
              id={conversation.conversation_id}
              joined_at={conversation.joined_at}
              conversation_id={conversation.conversation_id}
              user_id={conversation.user_id}
              conversations={conversation.conversations}
              clickHandler={() => updateOpenConvo(conversation.conversation_id)}
            />
          </div>
        ))
      ) : (
        <p>There are no active conversations</p>
      )}
    </>
  );
};

export default ConversationsList;
