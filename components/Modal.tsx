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
      <button className='button button-rounded' onClick={toggleModal}>
        {name}
      </button>
      {modal && (
        <div className='modal '>
          <div className='rounded-t bg-slate-200'>
            <h1>Warning</h1>
            <p>{message}</p>
          </div>
          <DeleteButton itemId={itemId} title='Confirm' />
          <button className='button button-rounded' onClick={toggleModal}>
            Cancel
          </button>
        </div>
      )}
    </>
  );
};

export default Modal;
