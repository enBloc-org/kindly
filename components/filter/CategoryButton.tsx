'use client';
import { ReactNode } from 'react';

type CategoryButtonPropsType = {
  children: ReactNode;
  handleButtonClick: (value: string) => void;
  category: string;
  option: string;
};

const CategoryButton: React.FC<CategoryButtonPropsType> = ({
  children,
  handleButtonClick,
  category,
  option,
}) => {
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
