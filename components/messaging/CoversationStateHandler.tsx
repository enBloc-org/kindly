'use client';

import { useEffect, useState } from 'react';

//Types
import { AllConversationsType } from '@/utils/messaging/messagingTypes';

//Components
import ConversationsList from './ConversationList';
import OpenConversation from './OpenConversation';

export type ConversationStateHandlerProps = AllConversationsType;

const ConversationStateHandler = ({
  allConversations,
}: {
  allConversations: ConversationStateHandlerProps;
}) => {
  const [openConvo, setOpenConvo] = useState(allConversations[0]);

  useEffect(() => {});

  return (
    <>
      <ConversationsList
        allConversations={allConversations}
        setOpenConvo={setOpenConvo}
      />
      <OpenConversation
        conversation_id={openConvo.conversation_id}
        user_id={openConvo.user_id}
        conversations={openConvo.conversations}
      />
    </>
  );
};

export default ConversationStateHandler;
