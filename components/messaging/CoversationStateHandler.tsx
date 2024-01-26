'use client';

import { useState } from 'react';
import { ConversationsListProps } from './ConversationsList';
import ConversationsList from './ConversationsList';
import OpenConversation from './OpenConversation';

export type ConversationStateHandlerProps = ConversationsListProps[];

const ConversationStateHandler = ({
  allConversations,
}: {
  allConversations: ConversationStateHandlerProps;
}) => {
  const [openConvo] = useState<ConversationsListProps>(allConversations[0]);

  return (
    <>
      {allConversations.map((conversation: ConversationsListProps) => (
        <div key={conversation.id}>
          <ConversationsList
            id={conversation.conversation_id}
            joined_at={conversation.joined_at}
            conversation_id={conversation.conversation_id}
            user_id={conversation.user_id}
            conversations={conversation.conversations}
          />
        </div>
      ))}

      <OpenConversation
        conversation_id={openConvo.conversation_id as number}
        user_id={openConvo.user_id}
        conversations={openConvo.conversations}
      />
    </>
  );
};

export default ConversationStateHandler;
