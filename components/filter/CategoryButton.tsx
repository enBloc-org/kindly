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
      className={`flex flex-col gap-2 p-2 items-center ${
        category === option ? 'bg-backgroundHighlight rounded-lg' : ''
      }`}
      onClick={() => handleButtonClick(option)}
    >
      {children}
    </button>
  );
};

export default CategoryButton;
