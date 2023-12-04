import React from 'react';
import { useState } from 'react';

const Modal = ({ name }) => {
  const [modal, setModal] = useState(false);

  const toggleModal = () => {
    setModal(!modal);
  };

  return (
    <>
      <button onClick={toggleModal}>{name}</button>;
    </>
  );
};

export default Modal;
