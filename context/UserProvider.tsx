'use client';
import type { profile } from '@/types/supabaseTypes';
import { ReactNode, createContext, useContext } from 'react';

type UserProviderProps = {
  userData: profile | null;
  children: ReactNode;
};

type UserContextType = {
  user: profile | null;
};

const UserContext = createContext<UserContextType>({ user: null });

export const UserProvider: React.FC<UserProviderProps> = ({
  userData,
  children,
}) => {
  return (
    <UserContext.Provider value={{ user: userData }}>
      {children}
    </UserContext.Provider>
  );
};

export function useUser() {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error('Context must be used within a provider.');
  }
  return context;
}
