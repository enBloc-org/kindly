'use client';
import { ReactNode } from 'react';
import { LayoutProvider } from './LayoutContext';
import ConversationContextProvider from './conversationContext';

type ProvidersType = {
  children: ReactNode;
};

const Providers: React.FC<ProvidersType> = ({ children }) => {
  return (
    <LayoutProvider>
      <ConversationContextProvider>{children}</ConversationContextProvider>
    </LayoutProvider>
  );
};

export default Providers;
