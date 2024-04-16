'use client';
import { FormEvent, useState, useRef, KeyboardEvent } from 'react';

// Components
import insertMessage from '@/utils/messaging/insertMessage';
import PaperPlaneIcon from '../icons/PaperPlaneIcon';

type MessageFormProps = {
  user_id: string | undefined;
  conversation_id: number | undefined;
};

const MessageForm: React.FC<MessageFormProps> = ({
  user_id,
  conversation_id,
}) => {
  const [message, setMessage] = useState<string>('');
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    try {
      await insertMessage(user_id, conversation_id, message);
      setMessage('');
      if (textareaRef.current) {
        textareaRef.current.style.height = '65px';
      }
    } catch (error) {
      console.error(`Failed to fetch messages from database: ${error}`);
      throw error;
    }
  };

  const onKeydownHandler = (e: KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSubmit(e);
    } else if (e.key === 'Enter' && e.shiftKey) {
      console.log('Press with shift');
    }
  };

  const onChangeHandler = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setMessage(e.target.value);

    if (textareaRef.current) {
      textareaRef.current.style.height = 'auto';
      textareaRef.current.style.height = `${textareaRef.current.scrollHeight}px`;
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className='z-50 flex items-center justify-center gap-6 border-t-2 border-gray-300 bg-gray-200 p-4'
    >
      <textarea
        className='h-[65px] w-5/6 resize-none overflow-hidden rounded-lg
          border-2 border-gray-300 bg-white px-4 py-2 pt-5 text-black shadow-inner'
        value={message}
        ref={textareaRef}
        onChange={onChangeHandler}
        onKeyDown={onKeydownHandler}
        placeholder='Type your message here'
      />
      <button
        type='submit'
        disabled={message.length < 0}
        className={`flex items-center justify-center rounded-full border-2 
          border-solid border-primaryGreen p-3 ${message.length > 0 ? 'opacity-100' : 'opacity-50'}`}
      >
        <PaperPlaneIcon width={30} height={30} />
      </button>
    </form>
  );
};

export default MessageForm;
