'use client';
import { Dispatch, createContext, useContext, useReducer } from 'react';
import {
  AllConversationsType,
  ConversationCardType,
} from '@/types/messagingTypes';

type ConversationContextProviderProps = {
  children: React.ReactNode;
};

interface IConversationState {
  allConversations: AllConversationsType;
  currentConversation: ConversationCardType | undefined;
  showConversationsList: boolean;
  currentUserId: string;
}

type ConversationContextType = {
  conversationState: IConversationState;
  dispatch: Dispatch<ConversationActionType>;
};

type ConversationActionType =
  | { type: 'SET_ALL_CONVERSATIONS'; payload: AllConversationsType }
  | { type: 'SET_CURRENT_CONVERSATION'; payload: ConversationCardType }
  | { type: 'SET_SHOW_CONVERSATIONS_LIST'; payload: boolean }
  | { type: 'SET_CURRENT_USER_ID'; payload: string };

export const ConversationContext =
  createContext<ConversationContextType | null>(null);

export default function ConversationContextProvider({
  children,
}: ConversationContextProviderProps) {
  const initialState: IConversationState = {
    allConversations: [],
    currentConversation: undefined,
    showConversationsList: true,
    currentUserId: '',
  };

  const [conversationState, dispatch] = useReducer(
    conversationReducer,
    initialState
  );

  return (
    <ConversationContext.Provider value={{ conversationState, dispatch }}>
      {children}
    </ConversationContext.Provider>
  );
}

export function useConversationContext() {
  const context = useContext(ConversationContext);
  if (!context) {
    throw new Error(
      'useConversationContext must be used within a ConversationContextProvider.'
    );
  }
  return context;
}
