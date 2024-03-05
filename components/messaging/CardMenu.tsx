'use client';
import { useState } from 'react';
import MeatballIcon from '../icons/MeatballIcon';
import DeleteConvoButton from './DeleteConvoButton';

type CardMenuType = {
  conversationId: number;
};

const CardMenu: React.FC<CardMenuType> = ({ conversationId }) => {
  const [menuOpen, setMenuOpen] = useState(false);

  const clickHandler = () => {
    setMenuOpen((prevState: boolean) => !prevState);
  };
  return (
    <>
      <button onClick={clickHandler}>
        <MeatballIcon width={25} height={25} />
      </button>
      {menuOpen && (
        <div className='relative z-20  bg-secondaryGreen'>
          <DeleteConvoButton title='Delete' conversationId={conversationId} />
        </div>
      )}
    </>
  );
};

export default CardMenu;
