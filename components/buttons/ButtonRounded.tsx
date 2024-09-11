'use client';
import React from 'react';

type ButtonRoundedPropTypes = {
  children: string;
  type: 'button' | 'submit' | 'reset';
  isDisabled?: boolean;
  clickHandler?: (event: React.MouseEvent<HTMLButtonElement>) => void;
  width?: string;
  role?: 'button' | 'submit' | 'reset';
};

const ButtonRounded: React.FC<ButtonRoundedPropTypes> = ({
  children,
  clickHandler,
  isDisabled = false,
  type = 'button',
  width = '',
  role = 'button',
}) => {
  return (
    <button
      className={`button button-rounded my-2 disabled:bg-primaryGray ${width}`}
      onClick={clickHandler}
      role={role}
      type={type}
      disabled={isDisabled}
      aria-label={`${children}`}
    >
      {children}
    </button>
  );
};

export default ButtonRounded;
