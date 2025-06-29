'use client';
import { FormEvent, useState, useRef, KeyboardEvent } from 'react';

// Components
import insertMessage from '@/supabase/models/messaging/insertMessage';
import PaperPlaneIcon from '../icons/PaperPlaneIcon';
import useMediaQuery from '../hooks/useMediaQuery';
import getAdditionalConversationDetails from '@/supabase/models/messaging/getAdditionalConversationDetails';
import restoreDeletedConversation from '@/supabase/models/messaging/restoreDeletedConversation';

type MessageFormProps = {
  user_id: string;
  conversation_id: number;
  deletedList: number[] | [];
  partner_has_deleted: boolean | undefined;
  setDeletedList: React.Dispatch<React.SetStateAction<number[]>>;
};

const MessageForm: React.FC<MessageFormProps> = ({
  user_id,
  conversation_id,
  deletedList,
  partner_has_deleted,
  setDeletedList,
}) => {
  const [message, setMessage] = useState<string>('');
  const [isDisabled, setIsDisabled] = useState(true);
  const textareaRef = useRef<HTMLTextAreaElement>(null);
  const breakpoint = useMediaQuery(1000);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (
      deletedList?.some(
        (deletedConversationId) =>
          deletedConversationId == conversation_id ||
          (partner_has_deleted !== undefined && partner_has_deleted === true)
      )
    ) {
      try {
        const additionalConversationData =
          await getAdditionalConversationDetails(user_id, conversation_id);

        await restoreDeletedConversation(
          user_id,
          additionalConversationData?.partner_id,
          additionalConversationData?.item_id,
          conversation_id
        );

        const updatedDeletedList = deletedList.filter(
          (deletedId) => deletedId !== conversation_id
        );
        setDeletedList(updatedDeletedList);
      } catch (error) {
        throw new Error(
          'conversation form failed during conversation restart: ' +
            (error as Error).message
        );
      }
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
      className='z-50 flex items-center justify-center gap-6 p-4'
    >
      <div className='relative mb-[10px] h-[65px] w-full'>
        <textarea
          className='h-full w-full resize-none overflow-hidden rounded-lg
        bg-secondaryGray px-4 py-2 pr-12 pt-5 text-black'
          value={message}
          name='message-input'
          ref={textareaRef}
          onChange={onChangeHandler}
          onKeyDown={onKeydownHandler}
          placeholder='Type your message...'
        />
        <button
          type='submit'
          name='message-submit-button'
          disabled={isDisabled}
          className={`absolute right-[5px] top-[5px] flex items-center justify-center rounded-full p-3 ${isDisabled ? 'opacity-40' : 'opacity-100'}`}
        >
          <PaperPlaneIcon width={30} height={30} />
        </button>
      </div>
    </form>
  );
};

export default MessageForm;
