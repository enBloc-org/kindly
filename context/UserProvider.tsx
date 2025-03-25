'use client';
import type { profile } from '@/types/supabaseTypes';
import {
  Dispatch,
  ReactNode,
  SetStateAction,
  createContext,
  useContext,
  useState,
} from 'react';

type UserProviderProps = {
  userData: profile | null;
  children: ReactNode;
};

type UserContextType = {
  user: profile | null;
  userId: string | null;
  setUser: Dispatch<SetStateAction<profile | null>>;
};

const UserContext = createContext<UserContextType | undefined>(undefined);

export const UserProvider: React.FC<UserProviderProps> = ({
  children,
  userData,
}) => {
  const [user, setUser] = useState<profile | null>(userData);
  const userId = user?.id || null;

  return (
    <UserContext.Provider value={{ user, setUser, userId }}>
      {children}
    </UserContext.Provider>
  );
};

export function useUser() {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error('useUser must be used within a UserProvider');
  }
  return context;
}
