import { ReactNode } from 'react';

const FullHeightContainer = ({ children }: { children: ReactNode }) => {
  return (
    <div className='h-min-[100dvh] grid grid-rows-[auto-1fr-auto]'>
      {children}
    </div>
  );
};

export default FullHeightContainer;
