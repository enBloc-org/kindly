'use client';
import { useState } from 'react';
import MeatballIcon from '../icons/MeatballIcon';

type CardMenuType = {
  toggleModal: (event: React.MouseEvent<HTMLButtonElement>) => void;
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
      <button
        onClick={toggleMenuClickHandler}
        className='rounded-md p-[.05rem] hover:bg-gray-200 hover:bg-opacity-50'
      >
        <MeatballIcon width={25} height={25} />
      </button>
      {menuOpen && (
        <div className='absolute right-0 top-10 z-20 flex w-40 flex-col gap-2 rounded-lg bg-secondaryGreen py-2 shadow-md'>
          <button
            className='py-[.15rem] text-sm hover:bg-gray-200 hover:bg-opacity-50'
            onClick={toggleModal}
          >
            Delete Conversation
          </button>
          <button className='py-[.15rem] text-sm hover:bg-gray-200 hover:bg-opacity-50'>
            Mark unread
          </button>
        </div>
      )}
    </>
  );
};

export default CardMenu;
