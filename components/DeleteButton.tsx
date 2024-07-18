'use client';

type DeleteButtonProps = {
  targetId?: number | string;
  title: string;
  onDeleteSuccess: () => void;
};

/**
 * @description Deletes a target from the database using its id.
 * @param onDeleteSuccess - A function provided by the parent component to handle actions after the item is deleted.
 */
export default function DeleteButton({
  targetId,
  title,
  onDeleteSuccess,
}: DeleteButtonProps) {
  if (typeof targetId === 'undefined') {
    throw new Error('item is undefined');
  }

  return (
    <button className='button button-rounded ' onClick={onDeleteSuccess}>
      {title}
    </button>
  );
}
