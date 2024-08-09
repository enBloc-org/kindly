'use client';
import React from 'react';

type ButtonRoundedPropTypes = {
  children: string;
  type: 'button' | 'submit' | 'reset';
  isDisabled?: boolean;
  clickHandler?: (event: React.MouseEvent<HTMLButtonElement>) => void;
  width?: string;
};

const ButtonRounded: React.FC<ButtonRoundedPropTypes> = ({
  children,
  clickHandler,
  isDisabled,
  type,
  width = '',
}) => {
  return (
    <button
      className={`button button-rounded disabled:bg-primaryGray ${width}`}
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

export default ButtonRounded;
