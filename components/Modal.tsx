'use client';

import React from 'react';
import { useState } from 'react';
import DeleteButton from './DeleteButton';

interface ModalProps {
  name: string;
  targetId?: number | string;
  message: string;
  onDeleteSuccess: () => void;
  isDisabled?: boolean;
}

const Modal = ({
  name,
  targetId,
  message,
  onDeleteSuccess,
  isDisabled = false,
}: ModalProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleModal = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <button
        className={`${isDisabled ? 'button-disabled' : 'button'} button-rounded my-2 cursor-not-allowed`}
        onClick={toggleModal}
        disabled={isDisabled}
      >
        {name}
      </button>
      {isOpen && (
        <div className='overlay'>
          <div className='flex flex-col items-center justify-center gap-3 rounded-lg bg-backgroundHighlight p-6 shadow-md'>
            <h1 className='font-semibold text-primaryOrange'>Warning!</h1>
            <p className='font-light italic'>{message}</p>
            <div className='mt-2 flex gap-6'>
              <DeleteButton
                targetId={targetId}
                title='Confirm'
                onDeleteSuccess={onDeleteSuccess}
              />
              <button className='button button-rounded' onClick={toggleModal}>
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Modal;
