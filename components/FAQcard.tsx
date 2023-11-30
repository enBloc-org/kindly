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

  return (
    <div className={` ${isOpen ? 'open' : ''}`} onClick={handleToggle}>
      <div className='question'>{question}</div>
      {isOpen && <div className='answer'>{answer}</div>}
    </div>
  );
};

export default FAQItem;
