'use client';
import React from 'react';

type ButtonRoundedPropTypes = {
  children: string;
  clickHandler: () => void;
};

const ButtonRounded: React.FC<ButtonRoundedPropTypes> = ({
  children,
  clickHandler,
}) => {
  return (
    <button className='button button-rounded' 
    onClick={clickHandler}
    role='button'
    aria-label={`${children}`}
    >
      {children}
    </button>
  );
};

export default ButtonRounded;
