'use client';
import React from 'react';

type ButtonPillPropTypes = {
  children: string;
  clickHandler?: () => void;
  className?: string;
};

const ButtonPill: React.FC<ButtonPillPropTypes> = ({
  children,
  clickHandler,
  className,
}) => {
  return (
    <button
      className={`button button-pill ${className}`}
      onClick={clickHandler}
      role='button'
      aria-label={`${children}`}
    >
      {children}
    </button>
  );
};

export default ButtonPill;
