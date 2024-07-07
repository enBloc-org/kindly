'use client';
import { ReactNode } from 'react';
import ConversationContextProvider from './conversationContext';

type ProvidersType = {
  children: ReactNode;
};

const Providers: React.FC<ProvidersType> = ({ children }) => {
  return <ConversationContextProvider>{children}</ConversationContextProvider>;
};

export default Providers;
