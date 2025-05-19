import { ReactNode } from 'react';

const FullHeightContainer = ({ children }: { children: ReactNode }) => {
  return (
    <div className='grid min-h-[100dvh] grid-rows-[auto-1fr-auto]'>
      {children}
    </div>
  );
};

export default FullHeightContainer;
