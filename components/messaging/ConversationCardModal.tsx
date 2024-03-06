'use client';
import React from 'react';
import { useState } from 'react';
import '../../app/styles/messaging-styles.css';
import deleteConversation from '@/utils/messaging/deleteConversation';

//Components
import CardMenu from './CardMenu';
import ButtonRounded from '../buttons/ButtonRounded';

interface ModalProps {
  conversationId?: number;
  message: string;
}

const ConversationCardModal = ({ conversationId, message }: ModalProps) => {
  const [modalOpen, setModalOpen] = useState(false);
  const [error, setError] = useState('');
  const [isDisabled, setIsDisabled] = useState(false);

  const toggleModalClickHandler = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    event.stopPropagation();
    setModalOpen((prevState: boolean) => !prevState);
  };

  const deleteConversationClickHandler = async () => {
    if (typeof conversationId === 'undefined') {
      throw new Error('item is undefined');
    }
    try {
      setIsDisabled(true);
      console.log({ conversationId });

      deleteConversation(conversationId);
      setModalOpen(false);
      setError('');
      setIsDisabled(false);
    } catch (error) {
      console.log(`Error: ${error}`);
      setError(`There was an error: ${error}`);
      setIsDisabled(false);
    }
  };

  return (
    <>
      <CardMenu toggleModal={toggleModalClickHandler} />
      {modalOpen && (
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
