'use client';
import { ReactNode } from 'react';

type CategoryButtonPropsType<T> = {
  children: ReactNode;
  handleButtonClick: (value: T) => void;
  category: T;
  option: T;
};

const CategoryButton = <T,>({
  children,
  handleButtonClick,
  category,
  option,
}: CategoryButtonPropsType<T>) => {
  return (
    <button
      role='button'
      className={`flex flex-col items-center gap-2 p-2 ${
        category === option ? 'rounded-lg bg-backgroundHighlight' : ''
      }`}
      onClick={() => handleButtonClick(option)}
    >
      {children}
    </button>
  );
};

export default CategoryButton;
