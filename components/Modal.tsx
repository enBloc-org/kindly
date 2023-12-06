'use client';
import React from 'react';
import { useState } from 'react';
import DeleteButton from './DeleteButton';

interface ModalProps {
  name: string;
  itemId?: number;
  message: string;
}

const Modal = ({ name, itemId, message }: ModalProps) => {
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
          <DeleteButton itemId={itemId} title='Confirm' />
          <button
            className='button button-rounded mx-2 my-2'
            onClick={toggleModal}
          >
            Cancel
          </button>
        </div>
      )}
    </>
  );
};

export default Modal;
