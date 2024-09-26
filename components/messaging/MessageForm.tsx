'use client';
import { FormEvent, useState, useRef, KeyboardEvent } from 'react';

// Components
import insertMessage from '@/supabase/models/messaging/insertMessage';
import PaperPlaneIcon from '../icons/PaperPlaneIcon';
import useMediaQuery from '../hooks/useMediaQuery';
import getAdditionalConversationDetails from '@/supabase/models/messaging/getAdditionalConversationDetails';
import restoreDeletedConversation from '@/supabase/models/messaging/restoreDeletedConversation';

type MessageFormProps = {
  user_id: string | undefined;
  conversation_id: number | undefined;
  deletedList: number[] | undefined;
};

const MessageForm: React.FC<MessageFormProps> = ({
  user_id,
  conversation_id,
  deletedList,
}) => {
  const [message, setMessage] = useState<string>('');
  const [isDisabled, setIsDisabled] = useState(true);
  const textareaRef = useRef<HTMLTextAreaElement>(null);
  const breakpoint = useMediaQuery(1000);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (
      deletedList?.some(
        (deltetedConversationId) => deltetedConversationId == conversation_id
      )
    ) {
      // some new function that goes to supabase and takes the information from this conversation and uses it to recreate user conversation
      // needs conversation_id, user_id item_id: partner_id:
      // has conversation_id, user_id,
      // call adatabase to get item id and partner id
      const additionalConversationData = await getAdditionalConversationDetails(
        user_id,
        conversation_id
      );
      await restoreDeletedConversation(
        user_id,
        additionalConversationData?.partner_id,
        additionalConversationData?.item_id,
        conversation_id
      );
    }
    const trimmedMessage = message.trim();
    try {
      await insertMessage(user_id, conversation_id, trimmedMessage);
      setMessage('');
      if (textareaRef.current) {
        textareaRef.current.style.height = '65px';
      }
      setIsDisabled(true);
    } catch (error) {
      console.error(`Failed to fetch messages from database: ${error}`);
      throw error;
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
