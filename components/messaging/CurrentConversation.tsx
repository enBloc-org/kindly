'use client';

import { MessageType } from '@/utils/messaging/messagingTypes';
import MessageCard from './MessageCard';
import MessageForm from './MessageForm';
import { useContext, useEffect, useState } from 'react';
import useConversation from '../../app/(dashboard)/conversations/useConversation';
import { createSupabaseClient } from '@/utils/supabase/supabaseClient';

const CurrentConversation: React.FC = () => {
  const supabase = createSupabaseClient;

  const { allConversations, currentConversation, setCurrentConversation } =
    useContext(useConversation);
  const [currentMessages, setCurrentMessages] = useState<MessageType[] | []>(
    []
  );

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
    const fetchMessagesForCurrentConversation = async () => {
      try {
        const { data: fetchedMessages } = await supabase
          .from('messages')
          .select('*')
          .eq('conversation_id', currentConversation.conversation_id);

        if (fetchedMessages === null) return;
        setCurrentMessages(fetchedMessages);
      } catch (error) {
        console.error(`Failed to fetch messages from database: ${error}`);
        throw error;
      }
    };

    fetchMessagesForCurrentConversation();
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
          setCurrentMessages((prevMessages) => [
            ...prevMessages,
            payload.new as MessageType,
          ]);
        }
      )
      .subscribe();

    return () => {
      supabase.removeChannel(channel);
    };
  }, [supabase]);

  return (
    <div className='flex w-2/4 flex-col'>
      {currentMessages.map((message: MessageType) => (
        <div key={`${message.id}-${message.created_at}`}>
          <MessageCard
            sender_id={message.sender_id}
            created_at={message.created_at}
            message_text={message.message_text}
            is_read={message.is_read}
            currentUser={currentConversation.user_id}
          />
        </div>
      ))}
      <MessageForm
        user_id={currentConversation?.user_id}
        conversation_id={currentConversation?.conversation_id}
      ></MessageForm>
    </div>
  );
};

export default CurrentConversation;
