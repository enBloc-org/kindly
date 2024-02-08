'use client';

import { useContext, useEffect } from 'react';
import { ConversationContext } from './ConversationProvider';

//Types
import { AllConversationsType } from '@/utils/messaging/messagingTypes';

//Components
import ConversationsList from './ConversationList';
import OpenConversation from './OpenConversation';

export type ConversationStateHandlerProps = AllConversationsType;

const ConversationStateHandler = () => {
  const { allConversations, openConversation, setOpenConversation } =
    useContext(ConversationContext);

  useEffect(() => {
    setOpenConversation && setOpenConversation(allConversations[0]);
  }, []);

  return (
    <>
      {allConversations.length > 0 ? (
        <ConversationsList />
      ) : (
        <p>There are no active conversations</p>
      )}

      <OpenConversation
        conversation_id={openConversation?.conversation_id}
        user_id={openConversation?.user_id}
        conversations={openConversation?.conversations}
      />
    </>
  );
};

export default ConversationStateHandler;
