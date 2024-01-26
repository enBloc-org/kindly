'use client';

import { useState } from 'react';
import { ConversationThreadProps } from './ConversationThread';
import ConversationThread from './ConversationThread';
import OpenConversation from './OpenConversation';

export type ConversationPageProps = ConversationThreadProps[];

const ConversationPage = ({
  allConversations,
}: {
  allConversations: ConversationPageProps;
}) => {
  const [openConvo] = useState<ConversationThreadProps>(allConversations[0]);

  return (
    <>
      {allConversations.map((conversation: ConversationThreadProps) => (
        <div key={conversation.id}>
          <ConversationThread
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
        conversations={openConvo.conversations.conversations}
      />
    </>
  );
};

export default ConversationPage;
