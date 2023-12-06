'use client';
import { useState } from 'react';

interface FAQItemProps {
  question: string;
  answers: string[];
}

const AccordionItem: React.FC<FAQItemProps> = ({ question, answers }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className='border-4 max-w-xl'>
      <div
        className='flex items-center gap-5 justify-between p-4 cursor-pointer'
        onClick={() => setIsOpen(!isOpen)}
      >
        <div>{question}</div>
        <div className='font-bold text-xl'>{isOpen ? '-' : '+'}</div>
      </div>
      {isOpen && (
        <div
          className={`p-4 overflow-hidden ${isOpen ? 'max-h-fit' : 'max-h-0'}`}
        >
          <ul>
            {answers.map((answer, index) => {
              return (
                <li key={index} className='list-disc p-2 ml-3 font-light'>
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
