'use client';
import { useState } from 'react';
import MeatballIcon from '../icons/MeatballIcon';

type CardMenuType = {
  toggleModal: () => void;
};

const CardMenu: React.FC<CardMenuType> = ({ toggleModal }) => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenuClickHandler = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    event.stopPropagation();
    setMenuOpen((prevState: boolean) => !prevState);
  };

  return (
    <>
      <button onClick={toggleMenuClickHandler}>
        <MeatballIcon width={25} height={25} />
      </button>
      {menuOpen && (
        <div className='absolute right-0 top-10 z-20 w-40 rounded-lg bg-secondaryGreen py-2 shadow-md'>
          <button className='text-sm' onClick={toggleModal}>
            Delete Conversation
          </button>
          <button className='mt-2 font-inter text-sm'>Mark unread</button>
        </div>
      )}
    </>
  );
};

export default CardMenu;
