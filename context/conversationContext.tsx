'use client';

import {
  Dispatch,
  SetStateAction,
  createContext,
  useContext,
  useState,
} from 'react';
import { AllConversationsType } from '@/utils/messaging/messagingTypes';

type ConverstaionContextProviderProps = {
  children: React.ReactNode;
};

type ConversationContext = {
  allConversations: AllConversationsType;
  setAllConversations: Dispatch<SetStateAction<AllConversationsType>>;
  openConversation: number | undefined;
  setOpenConversation: Dispatch<SetStateAction<number | undefined>>;
};

export const ConversationContext = createContext<ConversationContext | null>(
  null
);

export default function ConversationContextProvider({
  children,
}: ConverstaionContextProviderProps) {
  const [allConversations, setAllConversations] =
    useState<AllConversationsType>([]);

  const [openConversation, setOpenConversation] = useState<number | undefined>(
    undefined
  );

  return (
    <ConversationContext.Provider
      value={{
        allConversations,
        setAllConversations,
        openConversation,
        setOpenConversation,
      }}
    >
      {children}
    </ConversationContext.Provider>
  );
}

export function useConversationContext() {
  const context = useContext(ConversationContext);
  if (!context) {
    throw new Error(
      'useConvesationContext must be used within a ConversationContextProvider.'
    );
  }
  return context;
}
