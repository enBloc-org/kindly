'use client';
import { ReactNode } from 'react';
import { LayoutProvider } from './LayoutContext';

type ProvidersType = {
  children: ReactNode;
};

const Providers: React.FC<ProvidersType> = ({ children }) => {
  return <LayoutProvider>{children}</LayoutProvider>;
};

export default Providers;
