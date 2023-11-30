'use client';
import { useState } from 'react';

interface FAQItemProps {
  question: string;
  answer: string;
}
const FAQItem: React.FC<FAQItemProps> = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  const formattedAnswer = answer
    .split('•')
    .filter(Boolean)
    .map((item, index) => <p key={index}>{item.trim()}</p>);

  return (
    <div className={`faq-item ${isOpen ? 'open' : ''}`} onClick={handleToggle}>
      <div className='question'>{question}</div>
      {isOpen && (
        <div className='answer' style={{ whiteSpace: 'pre-line' }}>
          {formattedAnswer}
        </div>
      )}
    </div>
  );
};

export default FAQItem;
