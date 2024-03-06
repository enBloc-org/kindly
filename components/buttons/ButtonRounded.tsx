'use client';
import React from 'react';

type ButtonRoundedPropTypes = {
  children: string;
  type: 'button' | 'submit' | 'reset';
  clickHandler?: (event: React.MouseEvent<HTMLButtonElement>) => void;
};

const ButtonRounded: React.FC<ButtonRoundedPropTypes> = ({
  children,
  clickHandler,
  type,
}) => {
  return (
    <button
      className='button button-rounded'
      onClick={clickHandler}
      role='button'
      type={type}
      aria-label={`${children}`}
    >
      {children}
    </button>
  );
};

export default ButtonRounded;
