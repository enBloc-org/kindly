'use client';
import React from 'react';
import '../../app/styles/messaging-styles.css';
import { useState } from 'react';

//Components
import DeleteConvoButton from './DeleteConvoButton';
import CardMenu from './CardMenu';

interface ModalProps {
  conversationId?: number;
  message: string;
}

const ConversationCardModal = ({ conversationId, message }: ModalProps) => {
  const [modalOpen, setModalOpen] = useState(false);

  const toggleModalClickHandler = () => {
    setModalOpen((prevState: boolean) => !prevState);
  };

  return (
    <>
      <CardMenu toggleModal={toggleModalClickHandler} />
      {modalOpen && (
        <div className='overlay'>
          <div className='flex flex-col items-center justify-center gap-3 rounded-lg bg-backgroundHighlight p-6 shadow-md'>
            <h1 className='font-semibold text-primaryOrange'>Warning</h1>
            <p className='font-light italic'>{message}</p>
            <div>
              <DeleteConvoButton conversationId={conversationId} />
              <button
                className='button button-rounded mx-4 my-2'
                onClick={toggleModalClickHandler}
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ConversationCardModal;
