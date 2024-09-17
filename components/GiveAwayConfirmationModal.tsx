import { useState } from 'react';

interface GiveAwayConfirmationModalProps {
  itemName: string;
  onConfirm: () => void;
}

const GiveAwayConfirmationModal = ({
  itemName,
  onConfirm,
}: GiveAwayConfirmationModalProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleModal = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <button className='button button-rounded my-2' onClick={toggleModal}>
        Give Away
      </button>
      {isOpen && (
        <div className='overlay'>
          <div className='flex flex-col items-center justify-center gap-3 rounded-lg bg-backgroundHighlight p-6 shadow-md'>
            <h1 className='font-semibold text-primaryOrange'>
              Confirm Give Away
            </h1>
            <p className='font-light italic'>
              {`Are you sure you want to give away "${itemName}"? Once confirmed, a message will be sent to the recipient informing them the item has been given away.`}
            </p>
            <div className='mt-2 flex gap-6'>
              <button
                className='button button-rounded'
                onClick={() => {
                  onConfirm();
                  toggleModal();
                }}
              >
                Confirm
              </button>
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

export default GiveAwayConfirmationModal;
