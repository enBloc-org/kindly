'use client';
import React from 'react';

type ButtonRoundedPropTypes = {
  children: string;
  type: 'button' | 'submit' | 'reset';
  isDisabled?: boolean;
  clickHandler?: (event: React.MouseEvent<HTMLButtonElement>) => void;
};

const ButtonGoToItem: React.FC<ButtonRoundedPropTypes> = ({
  children,
  clickHandler,
  isDisabled,
  type,
}) => {
  return (
    <button
      className='button button-rounded button-stroke disabled:bg-hoverGreen'
      onClick={clickHandler}
      role='button'
      type={type}
      disabled={isDisabled}
      aria-label={`${children}`}
    >
      {children}
    </button>
  );
};

export default ButtonGoToItem;
