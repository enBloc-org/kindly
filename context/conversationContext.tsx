'use client';
import { Dispatch, createContext, useContext, useReducer } from 'react';
import {
  ConversationActionType,
  ConversationStateType,
} from '../types/contextTypes';
import conversationReducer from './conversationStore';

type ConversationContextProviderProps = {
  children: React.ReactNode;
};

type ConversationContextType = {
  conversationState: ConversationStateType;
  dispatch: Dispatch<ConversationActionType>;
};

export const ConversationContext =
  createContext<ConversationContextType | null>(null);

export default function ConversationContextProvider({
  children,
}: ConversationContextProviderProps) {
  const initialState: ConversationStateType = {
    allConversations: [],
    currentConversation: undefined,
    showConversationsList: true,
    currentUserId: '',
    conversationId: -1,
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
