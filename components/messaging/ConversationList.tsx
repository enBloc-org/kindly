import {
  AllConversationsType,
  ConversationCardType,
} from '@/utils/messaging/messagingTypes';
import ConversationCard from './ConversationCard';
import { SetStateAction, Dispatch } from 'react';

type ConversationsListProps = {
  allConversations: AllConversationsType;
  setOpenConvo: Dispatch<SetStateAction<ConversationCardType>>;
};

const ConversationsList: React.FC<ConversationsListProps> = ({
  allConversations,
  setOpenConvo,
}) => {
  const updateOpenConvo = async (i: number) => {
    setOpenConvo(allConversations[i]);
  };

  return (
    <>
      {allConversations.map((conversation, index) => (
        <div key={`${conversation.id}-${index}`}>
          <ConversationCard
            id={conversation.conversation_id}
            joined_at={conversation.joined_at}
            conversation_id={conversation.conversation_id}
            user_id={conversation.user_id}
            conversations={conversation.conversations}
            clickHandler={() => updateOpenConvo(index)}
          />
        </div>
      ))}
    </>
  );
};
export default ConversationsList;
