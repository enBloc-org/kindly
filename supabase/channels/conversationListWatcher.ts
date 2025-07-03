import newClient from '../utils/newClient';
import { Dispatch, SetStateAction } from 'react';
import { type UserConversationType } from '@/types/messagingTypes';
import type { ConversationActionType } from '@/types/contextTypes';
import selectConversationCardDetails from '@/supabase/models/messaging/selectConversationCardDetails';

const conversationWatcher = async (
  currentUserId: string,
  setNotificationList: Dispatch<SetStateAction<number[]>>,
  dispatch: Dispatch<ConversationActionType>
) => {
  const supabase = newClient();

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
              (conversationId) => conversationId !== payload.new.conversation_id
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
};

export default conversationWatcher;
