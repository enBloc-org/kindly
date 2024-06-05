'use client';
import { Dispatch, createContext, useContext, useReducer } from 'react';
import { ConversationActionType, IConversationState } from './contextTypes';
import conversationReducer from './conversationStore';

type ConversationContextProviderProps = {
  children: React.ReactNode;
};

type ConversationContextType = {
  conversationState: IConversationState;
  dispatch: Dispatch<ConversationActionType>;
};

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
