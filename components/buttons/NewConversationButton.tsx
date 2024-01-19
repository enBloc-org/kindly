'use client';
import newConvoStart from '@/utils/supabase/newConvoStart';

export default function NewConversationButton({
  userId,
  donorId,
}: {
  userId: string;
  donorId: string;
}) {
  return (
    <button
      className='button button-rounded disabled:bg-primaryGray'
      onClick={() => newConvoStart(userId, donorId)}
    >
      MESSAGE{' '}
    </button>
  );
}
