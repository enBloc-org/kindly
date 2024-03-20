'use client';
import { useState } from 'react';

interface FAQItemProps {
  question: string;
  answers: string[];
}

const AccordionItem: React.FC<FAQItemProps> = ({ question, answers }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className='max-w-xl border-4'>
      <div
        className='flex cursor-pointer items-center justify-between gap-5 p-4'
        onClick={() => setIsOpen(!isOpen)}
      >
        <div>{question}</div>
        <div className='text-xl font-bold'>{isOpen ? '-' : '+'}</div>
      </div>
      {isOpen && (
        <div
          className={`overflow-hidden p-4 ${isOpen ? 'max-h-fit' : 'max-h-0'}`}
        >
          <ul>
            {answers.map((answer, index) => {
              return (
                <li key={index} className='ml-3 list-disc p-2 font-light'>
                  {answer}
                </li>
              );
            })}
          </ul>
        </div>
      )}
    </div>
  );
};

export default AccordionItem;
