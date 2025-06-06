import { ReactNode } from 'react';
import ConversationContextProvider from './conversationContext';
import { UserProvider } from './UserProvider';
import type { profile } from '@/types/supabaseTypes';

type ProvidersType = {
  children: ReactNode;
  userData: profile | null;
};

const Providers: React.FC<ProvidersType> = ({ userData, children }) => {
  return (
    <ConversationContextProvider>
      <UserProvider userData={userData}>{children}</UserProvider>
    </ConversationContextProvider>
  );
};

export default Providers;
