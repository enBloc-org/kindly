'use client';
import ConversationCard from './ConversationCard';
import { useEffect, useState } from 'react';
import {
  ConversationCardType,
  UserConversationType,
} from '@/types/messagingTypes';
import { useConversationContext } from '@/context/conversationContext';
import newClient from '@/supabase/utils/newClient';
import selectConversationCardDetails from '@/supabase/models/messaging/selectConversationCardDetails';
import updateConversationReadStatus from '@/supabase/models/messaging/updateConversationReadStatus';

const ConversationsList: React.FC = () => {
  const {
    conversationState: { allConversations, currentUserId },
    dispatch,
  } = useConversationContext();

  const [notificationList, setNotificationList] = useState<number[]>([]);
  const supabase = newClient();

  const updateOpenConversation = async (givenId: number) => {
    const newCurrentConversation = allConversations?.filter(
      (conversation: ConversationCardType) =>
        conversation.conversation_id === givenId
    )[0];

    dispatch({
      type: 'SET_CURRENT_CONVERSATION',
      payload: newCurrentConversation,
    });
    updateConversationReadStatus(givenId, currentUserId, false);

    dispatch({ type: 'SET_SHOW_CONVERSATIONS_LIST', payload: false });
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
            const newConversation = await selectConversationCardDetails(
              payload.new as UserConversationType
            );

            dispatch({
              type: 'ADD_NEW_CONVERSATION',
              payload: newConversation,
            });
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
          dispatch({ type: 'DELETE_CONVERSATION', payload: payload.old.id });
        }
      )
      .subscribe();

    return () => {
      supabase.removeChannel(channel);
    };
  }, [allConversations]);

  return (
    <div className='flex flex-col gap-[2px] overflow-y-auto bg-gray-200 shadow-inner lg:w-[400px] lg:gap-2 lg:p-2'>
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
              clickHandler={() =>
                updateOpenConversation(conversation.conversation_id)
              }
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
