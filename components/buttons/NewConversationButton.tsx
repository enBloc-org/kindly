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
    <button onClick={() => newConvoStart(userId, donorId)}>message </button>
  );
}
