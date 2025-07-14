'use client';
import { useEffect, useState, useCallback } from 'react';
import {
  type ConversationCardType,
  type ConversationFilterType,
  ConversationFilters,
} from '@/types/messagingTypes';
import { useConversationContext } from '@/context/conversationContext';
import updateConversationReadStatus from '@/supabase/models/messaging/updateConversationReadStatus';
import ConversationCard from '../ConversationCard/ConversationCard';
import ConversationFilter from '../ConversationFilter/ConversationFilter';
import conversationWatcher from '@/supabase/channels/conversationListWatcher';

const ConversationsList: React.FC = () => {
  const {
    conversationState: { allConversations, currentConversation, currentUserId },
    dispatch,
  } = useConversationContext();

  const [notificationList, setNotificationList] = useState<number[]>([]);
  const [selectedFilter, setSelectedFilter] = useState<ConversationFilterType>(
    ConversationFilters.GIVER
  );

  const updateOpenConversation = useCallback(
    async (givenId: number) => {
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
    },
    [allConversations, dispatch, currentUserId]
  );

  useEffect(() => {
    setNotificationList(
      allConversations
        .filter((conversation) => conversation.has_unread_messages)
        .map((conversation) => conversation.conversation_id)
    );
  }, [allConversations]);

  useEffect(() => {
    conversationWatcher(currentUserId, setNotificationList, dispatch);
  }, [allConversations]);

  return (
    <div className='flex flex-col overflow-y-auto border-b-2 border-base-80 bg-monoY lg:w-[400px]'>
      <ConversationFilter
        selectedFilter={selectedFilter}
        setSelectedFilter={setSelectedFilter}
      />
      {allConversations.length > 0 ? (
        allConversations
          .filter((conversation) =>
            selectedFilter === ConversationFilters.GIVER
              ? conversation.is_donation_by_user
              : !conversation.is_donation_by_user
          )
          .map((conversation) => (
            <div key={`${conversation.id}`}>
              <ConversationCard
                conversationId={conversation.conversation_id}
                messageTimestamp={conversation.created_at}
                messageText={conversation.message_text}
                partnerUsername={conversation.partner_username}
                itemImage={conversation.item_image}
                clickHandler={() =>
                  updateOpenConversation(conversation.conversation_id)
                }
                notificationList={notificationList}
                currentConversationId={
                  currentConversation?.conversation_id as number
                }
              />
            </div>
          ))
      ) : (
        <p className='pb-4 text-center font-light italic'>
          {`You have no conversations as the ${selectedFilter.toLowerCase()}`}
        </p>
      )}
    </div>
  );
};

export default ConversationsList;
