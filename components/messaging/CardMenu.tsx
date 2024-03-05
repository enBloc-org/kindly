'use client';
import { useState } from 'react';
import MeatballIcon from '../icons/MeatballIcon';
import DeleteConvoButton from './DeleteConvoButton';

type CardMenuType = {
  conversationId: number;
};

const CardMenu: React.FC<CardMenuType> = ({ conversationId }) => {
  const [menuOpen, setMenuOpen] = useState(false);

  const clickHandler = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.stopPropagation();
    setMenuOpen((prevState: boolean) => !prevState);
  };
  return (
    <>
      <button onClick={clickHandler}>
        <MeatballIcon width={25} height={25} />
      </button>
      {menuOpen && (
        <div className='absolute right-0 top-10 z-20 w-40 rounded-lg bg-secondaryGreen py-2 shadow-md'>
          <DeleteConvoButton conversationId={conversationId} />
          <button className='mt-2 font-inter text-sm'>Mark unread</button>
        </div>
      )}
    </>
  );
};

export default CardMenu;
