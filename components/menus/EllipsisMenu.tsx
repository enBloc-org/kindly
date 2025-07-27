'use client';
import { useState } from 'react';
import EllipsisIcon from '../icons/EllipsisIcon';

type EllipsisMenuType = {
  menuOptions: {
    buttonMessage: string;
    clickHandler: (event: React.MouseEvent<HTMLButtonElement>) => void;
  }[];
};

const EllipsisMenu: React.FC<EllipsisMenuType> = ({ menuOptions }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenuClickHandler = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    event.stopPropagation();
    setIsMenuOpen((prevState: boolean) => !prevState);
  };

  return (
    <div className='relative'>
      <button
        onClick={toggleMenuClickHandler}
        className='rounded-md p-[.05rem]'
        name='ellipsis-button'
      >
        <EllipsisIcon width={25} height={25} />
      </button>
      {isMenuOpen && (
        <div className='absolute right-0 top-10 z-20 flex w-40 flex-col gap-2 rounded-md bg-monoY py-2 shadow-md'>
          {menuOptions.map((option, index) => {
            return (
              <>
                <button
                  key={option.buttonMessage}
                  className='mx-5 py-[.15rem] text-sm hover:bg-gray-200 hover:bg-opacity-50'
                  onClick={option.clickHandler}
                >
                  {option.buttonMessage}
                </button>
                {index !== menuOptions.length - 1 && (
                  <hr className='mx-5 border-primaryOrange' />
                )}
              </>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default EllipsisMenu;
