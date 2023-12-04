import React from 'react';
import { useState } from 'react';

const Modal = ({ name }) => {
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
        <div className='modal'>
          <div className='overlay' onClick={toggleModal}></div>
          <div className='modal-content'>
            <h1>Warning</h1>
            <p>By pressing `confirm` again you will delete X</p>
          </div>
          <button>Confirm</button>
          <button onClick={toggleModal}>Cancel</button>
        </div>
      )}
    </>
  );
};

export default Modal;
