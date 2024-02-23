'use client';
import React from 'react';
import { useState } from 'react';
import DeleteConvoButton from './DeleteConvoButton';

interface ModalProps {
  name: string;
  convoId?: number;
  message: string;
}

const DeleteConvoModal = ({ name, convoId, message }: ModalProps) => {
  const [modal, setModal] = useState(false);

  const toggleModal = () => {
    setModal(!modal);
  };

  return (
    <>
      {!modal && (
        <button className='button button-rounded my-2' onClick={toggleModal}>
          {name}
        </button>
      )}
      {modal && (
        <div className='modal my-2'>
          <div className='rounded-t bg-backgroundHighlight p-2'>
            <h1 className='font-semibold text-primaryOrange'>Warning</h1>
            <p>{message}</p>
          </div>
          <DeleteConvoButton convoId={convoId} title='Confirm' />
          <button
            className='button button-rounded mx-2 my-2 border-2 border-black'
            onClick={toggleModal}
          >
            Cancel
          </button>
        </div>
      )}
    </>
  );
};

export default DeleteConvoModal;
