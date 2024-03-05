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
    <div className='absolute m-3'>
      {!modal && (
        <button className='' onClick={toggleModal}>
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
          <button className='button button-rounded m-2' onClick={toggleModal}>
            Cancel
          </button>
        </div>
      )}
    </div>
  );
};

export default DeleteConvoModal;
