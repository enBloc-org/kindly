'use client';

import { MessageType } from '@/utils/messaging/messagingTypes';
import MessageCard from './MessageCard';
import MessageForm from './MessageForm';
import { useContext, useEffect } from 'react';
import useConversation from '../../app/(dashboard)/conversations/useConversation';
import { createSupabaseClient } from '@/utils/supabase/supabaseClient';

const CurrentConversation: React.FC = () => {
  const supabase = createSupabaseClient;

  const { allConversations, currentConversation, setCurrentConversation } =
    useContext(useConversation);

  useEffect(() => {
    const highestId = Math.max(
      ...allConversations.map((conversation) => conversation.conversation_id)
    );

    setCurrentConversation &&
      setCurrentConversation(
        allConversations?.filter(
          (conversation) => conversation.conversation_id === highestId
        )[0]
      );
  }, []);

  useEffect(() => {
    const channel = supabase
      .channel('realtime messages')
      .on(
        'postgres_changes',
        {
          event: 'INSERT',
          schema: 'public',
          table: 'messages',
        },
        (payload) => {
          // setCurrentConversation(curr[
          //   ...currentConversation,
          //   payload.new as MessageType,
          // ]);
          console.log(payload.new);
        }
      )
      .subscribe();

    return () => {
      supabase.removeChannel(channel);
    };
  }, [supabase]);

  return (
    <div className='flex w-2/4 flex-col'>
      {currentConversation?.conversations?.messages?.map(
        (message: MessageType) => (
          <div
            key={`${currentConversation.conversations.id}-${message.created_at}`}
          >
            <MessageCard
              sender_id={message.sender_id}
              created_at={message.created_at}
              message_text={message.message_text}
              is_read={message.is_read}
              currentUser={currentConversation.user_id}
            />
          </div>
        )
      )}
      <MessageForm
        user_id={currentConversation?.user_id}
        conversation_id={currentConversation?.conversation_id}
      ></MessageForm>
    </div>
  );
};

export default CurrentConversation;
