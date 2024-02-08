'use client';

import { useContext, useEffect } from 'react';
import { ConversationContext } from './ConversationProvider';

//Components
import ConversationsList from './ConversationsList';
import OpenConversation from './OpenConversation';

const ConversationStateHandler = () => {
  const { allConversations, openConversation, setOpenConversation } =
    useContext(ConversationContext);

  useEffect(() => {
    const highestId = Math.max(
      ...allConversations.map((conversation) => conversation.conversation_id)
    );

    setOpenConversation &&
      setOpenConversation(
        allConversations?.filter(
          (conversation) => conversation.conversation_id === highestId
        )[0]
      );
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
