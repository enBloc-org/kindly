import { ReactNode } from 'react';

export default function PopupWrapper({ children }: { children: ReactNode }) {
  const style = {
    display: 'grid',
    gridTemplateRows: 'auto',
    fontSize: 'small',
    maxHeight: '198px',
    maxWidth: '358px',
    gap: '24px',
    padding: '16px',
    textAlign: 'center',
  };

  return (
    <div className='bg-[primaryWhite]' style={style}>
      {children}
    </div>
  );
}
