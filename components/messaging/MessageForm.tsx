'use client';

import convoRestart from '../../supabase/models/messaging/convoRestart';
import { useConversationContext } from '../../context/conversationContext';
import { FormEvent, useState, useRef, KeyboardEvent } from 'react';

// Components
import insertMessage from '@/supabase/models/messaging/insertMessage';
import PaperPlaneIcon from '../icons/PaperPlaneIcon';
import { ConversationCardType } from '@/types/messagingTypes';
import useMediaQuery from '../hooks/useMediaQuery';

type MessageFormProps = {
  userId: string | undefined;
  conversationId: number | undefined;
  memberHasDeleted: boolean | undefined;
  partnerId: string | undefined;
  itemId: number | undefined;
};

const MessageForm: React.FC<MessageFormProps> = ({
  userId,
  conversationId,
  memberHasDeleted,
  partnerId,
  itemId,
}) => {
  const [message, setMessage] = useState<string>('');
  const [isDisabled, setIsDisabled] = useState(true);
  const textareaRef = useRef<HTMLTextAreaElement>(null);
  const { currentConversation, setCurrentConversation } =
    useConversationContext();
  const breakpoint = useMediaQuery(1000);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    const trimmedMessage = message.trim();

    try {
      await insertMessage(userId, conversationId, trimmedMessage);
      setMessage('');
      if (textareaRef.current) {
        textareaRef.current.style.height = '65px';
      }
      setIsDisabled(true);
    } catch (error) {
      console.error(`Failed to fetch messages from database: ${error}`);
      throw error;
    }

    if (memberHasDeleted) {
      try {
        await convoRestart(conversationId, userId, partnerId, itemId);

        currentConversation &&
          setCurrentConversation({
            ...currentConversation,
            conversations: {
              ...currentConversation.conversations, // Keep other properties
              memberHasDeleted: false, // Update only this property
            },
          } as ConversationCardType);
      } catch (error) {
        console.error('error');
      }
    }
  };

  const onKeydownHandler = (e: KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey && !breakpoint) {
      e.preventDefault();
      if (!isDisabled) handleSubmit(e);
    }
  };

  const onChangeHandler = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    if (/\S+/.test(e.target.value) && message.length >= 0) {
      setIsDisabled(false);
    } else {
      setIsDisabled(true);
    }

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
        disabled={isDisabled}
        className={`flex items-center justify-center rounded-full border-2 
          border-solid border-primaryGreen p-3 ${isDisabled ? 'opacity-40' : 'opacity-100'}`}
      >
        <PaperPlaneIcon width={30} height={30} />
      </button>
    </form>
  );
};

export default MessageForm;
