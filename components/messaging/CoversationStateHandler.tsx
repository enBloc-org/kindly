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
  const [openConvo, setOpenConvo] = useState<ConversationsListProps>(
    allConversations[0]
  );

  const updateOpenConvo = (i: number) => {
    setOpenConvo(allConversations[i]);
    console.log(openConvo);
  };

  return (
    <>
      {allConversations.map(
        (conversation: ConversationsListProps, index: number) => (
          <div key={`${conversation.id}-${index}`}>
            <button
              type='button'
              onClick={() => {
                updateOpenConvo(index);
              }}
            >
              <ConversationsList
                id={conversation.conversation_id}
                joined_at={conversation.joined_at}
                conversation_id={conversation.conversation_id}
                user_id={conversation.user_id}
                conversations={conversation.conversations}
              />
            </button>
          </div>
        )
      )}

      <OpenConversation
        conversation_id={openConvo.conversation_id as number}
        user_id={openConvo.user_id}
        conversations={openConvo.conversations}
      />
    </>
  );
};

export default ConversationStateHandler;
