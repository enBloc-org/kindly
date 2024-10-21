'use client';

type ActionButtonProps = {
  targetId?: number | string;
  title: string;
  onAction: () => void;
};

/**
 * @description Handles an action for a target based on its id.
 * @param onAction - Universal function for performing actions (delete, giw away, etc.).
 */
export default function ActionButton({
  targetId,
  title,
  onAction,
}: ActionButtonProps) {
  if (typeof targetId === 'undefined') {
    throw new Error('item is undefined');
  }

  return (
    <button className='button button-rounded ' onClick={onAction}>
      {title}
    </button>
  );
}
