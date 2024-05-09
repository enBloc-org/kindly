'use client';
import ConversationCard from './ConversationCard';
import { useEffect, useState } from 'react';
import { ConversationCardType } from '@/types/messagingTypes';
import { useConversationContext } from '@/context/conversationContext';
import selectItemImageAndName from '@/supabase/models/messaging/selectItemImageAndName';
import newClient from '@/supabase/utils/newClient';

const ConversationsList: React.FC = () => {
  const {
    allConversations,
    setAllConversations,
    setCurrentConversation,
    setShowConversationsList,
    currentUserId,
  } = useConversationContext();

  const [notificationList, setNotificationList] = useState<number[]>([]);
  const supabase = newClient();

  const updateOpenConvo = async (givenId: number) => {
    setCurrentConversation &&
      setCurrentConversation(
        allConversations?.filter(
          (conversations) => conversations.conversation_id === givenId
        )[0]
      );

    setShowConversationsList(false);
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
          filter: `user_id=eq.${currentUserId}`,
        },
        async (payload) => {
          if (payload.new.user_id === currentUserId) {
            const newConversation = await selectItemImageAndName(
              payload.new as ConversationCardType
            );

            setAllConversations((prevConversations) => [
              ...prevConversations,
              newConversation,
            ]);
          }
        }
      )
      .on(
        'postgres_changes',
        {
          event: 'UPDATE',
          schema: 'public',
          table: 'user_conversations',
          filter: `user_id=eq.${currentUserId}`,
        },
        (payload) => {
          if (payload.new.has_unread_messages) {
            setNotificationList((prevState) => {
              if (!prevState.includes(payload.new.conversation_id)) {
                return [...prevState, payload.new.conversation_id];
              }
              return prevState;
            });
          }
          if (!payload.new.has_unread_messages) {
            setNotificationList((prevState) => {
              return prevState.filter(
                (conversationId) =>
                  conversationId !== payload.new.conversation_id
              );
            });
          }
        }
      )
      .on(
        'postgres_changes',
        {
          event: 'DELETE',
          schema: 'public',
          table: 'user_conversations',
          filter: `user_id=eq.${currentUserId}`,
        },
        (payload) => {
          setAllConversations((prevConversations) => [
            ...prevConversations.filter(
              (conversation) => conversation.id !== payload.old.id
            ),
          ]);
        }
      )
      .subscribe();

    return () => {
      supabase.removeChannel(channel);
    };
  }, [allConversations, setAllConversations]);

  return (
    <div className='flex flex-col overflow-y-auto bg-gray-200 p-2 shadow-inner lg:w-[400px] lg:gap-2'>
      {allConversations.length > 0 ? (
        allConversations.map((conversation) => (
          <div key={`${conversation.id}`}>
            <ConversationCard
              conversationId={conversation.conversation_id}
              messageTimestamp={conversation.created_at}
              messageText={conversation.message_text}
              partnerUsername={conversation.partner_username}
              partnerAvatar={conversation.partner_avatar}
              itemName={conversation.item_name}
              clickHandler={() => updateOpenConvo(conversation.conversation_id)}
              notificationList={notificationList}
            />
          </div>
        ))
      ) : (
        <p className='font-light italic'>You have no active conversations...</p>
      )}
    </div>
  );
};

export default ConversationsList;
