'use client';
import React from 'react';
import { useState } from 'react';
import '../../app/styles/messaging-styles.css';
import deleteConversation from '../../supabase/models/messaging/deleteConversation';

//Components
import EllipsisMenu from '../menus/EllipsisMenu';
import ButtonRounded from '../buttons/ButtonRounded';
import updateConversationReadStatus from '@/supabase/models/messaging/updateConversationReadStatus';
import { useConversationContext } from '@/context/conversationContext';

type ModalProps = {
  conversationId?: number;
  message: string;
};

const ConversationCardModal = ({ conversationId, message }: ModalProps) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [error, setError] = useState('');
  const [isDisabled, setIsDisabled] = useState(false);

  const {
    conversationState: { currentConversation },
  } = useConversationContext();

  const toggleModalClickHandler = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    event.stopPropagation();
    setIsModalOpen((prevState: boolean) => !prevState);
  };

  const deleteConversationClickHandler = async (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    event.stopPropagation();
    if (
      typeof conversationId === 'undefined' ||
      typeof currentConversation?.user_id === 'undefined'
    ) {
      throw new Error('Conversation is undefined');
    }
    try {
      setIsDisabled(true);
      deleteConversation(conversationId, currentConversation.user_id);
      setIsModalOpen(false);
      setError('');
      setIsDisabled(false);
    } catch (error) {
      console.error(`Could not delete conversation: ${error}`);
      setError(`There was an error: ${error}`);
      setIsDisabled(false);
    }
  };

  const markConversationUnreadHandler = async (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    event.stopPropagation();

    if (
      typeof conversationId === 'undefined' ||
      typeof currentConversation?.user_id === 'undefined'
    ) {
      throw new Error('Conversation is undefined');
    }

    try {
      setIsDisabled(true);

      await updateConversationReadStatus(
        conversationId,
        currentConversation?.user_id,
        true
      );

      setIsModalOpen(false);
      setError('');
      setIsDisabled(false);
    } catch (error) {
      console.error(`Could not update conversation: ${error}`);
      setError(`There was an error: ${error}`);
      setIsDisabled(false);
    }
  };

  return (
    <>
      <EllipsisMenu
        menuOptions={[
          {
            buttonMessage: 'Delete Conversation',
            clickHandler: toggleModalClickHandler,
          },
          {
            buttonMessage: 'Mark Unread',
            clickHandler: markConversationUnreadHandler,
          },
        ]}
      />
      {isModalOpen && (
        <div className='overlay'>
          <div className='flex flex-col items-center justify-center gap-3 rounded-lg bg-backgroundHighlight p-6 shadow-md'>
            <h1 className='font-semibold text-primaryOrange'>Warning!</h1>
            <p className='font-light italic'>{message}</p>
            <div className='mt-2 flex gap-6'>
              <ButtonRounded
                type='button'
                clickHandler={deleteConversationClickHandler}
                isDisabled={isDisabled}
              >
                Delete
              </ButtonRounded>
              <ButtonRounded
                type='button'
                clickHandler={toggleModalClickHandler}
              >
                Cancel
              </ButtonRounded>
            </div>
            {error && <p className='error-message mt-4'>{error}</p>}
          </div>
        </div>
      )}
    </>
  );
};

export default ConversationCardModal;
