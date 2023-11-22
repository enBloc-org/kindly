'use client';
import React from 'react';

type ButtonPillPropTypes = {
  children: string;
  clickHandler: () => void;
};

const ButtonPill: React.FC<ButtonPillPropTypes> = ({
  children,
  clickHandler,
}) => {
  return (
    <button
      className='button button-pill'
      onClick={clickHandler}
      role='button'
      aria-label={`${children}`}
    >
      {children}
    </button>
  );
};

export default ButtonPill;
