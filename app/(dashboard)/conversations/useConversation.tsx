import { createContext } from 'react';
import {
  AllConversationsType,
  ConversationCardType,
} from '@/types/messagingTypes';

type ConversationProviderProps = {
  allConversations: AllConversationsType;
  setAllConversations: React.Dispatch<
    React.SetStateAction<AllConversationsType>
  >;
  currentConversation: ConversationCardType;
  setCurrentConversation: React.Dispatch<
    React.SetStateAction<ConversationCardType>
  > | null;
  showConversationsList: boolean;
  setShowConversationsList: React.Dispatch<React.SetStateAction<boolean>>;
};

const defaultContext: ConversationProviderProps = {
  allConversations: [],
  setAllConversations: () => [],
  currentConversation: {
    id: 2,
    joined_at: new Date().toString(),
    conversation_id: 2,
    user_id: 'default',
    item_id: 2,
    items: {
      imageSrc: 'default',
      item_name: 'default',
    },
  },
  setCurrentConversation: () => null,
  showConversationsList: false,
  setShowConversationsList: () => true,
};

const useConversation = createContext(defaultContext);

export default useConversation;
