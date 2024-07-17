import newClient from '../utils/newClient';
import { Dispatch, SetStateAction } from 'react';

export default async function notificationWatcher(
  userId: string,
  pathname: string,
  setHasNotification: Dispatch<SetStateAction<boolean>>
) {
  const supabase = newClient();
  const channel = supabase
    .channel('realtime conversations notifications')
    .on(
      'postgres_changes',
      {
        event: 'INSERT',
        schema: 'public',
        table: 'user_conversations',
        filter: `user_id=eq.${userId}`,
      },
      (payload) => {
        if (payload.new.user_id === userId) {
          if (pathname !== '/conversations') {
            setHasNotification(true);
          }
        }
      }
    )
    .on(
      'postgres_changes',
      {
        event: 'UPDATE',
        schema: 'public',
        table: 'user_conversations',
        filter: `user_id=eq.${userId}`,
      },
      (payload) => {
        if (payload.new.has_unread_messages) {
          if (pathname !== '/conversations') {
            setHasNotification(true);
          }
        }
      }
    )
    .subscribe();

  return () => {
    supabase.removeChannel(channel);
  };
}
