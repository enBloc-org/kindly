import React from 'react';
import { useRouter } from 'next/navigation';
import { useConversationContext } from '@/context/conversationContext';
import newClient from '@/supabase/utils/newClient';
import startNewConversation from '@/supabase/models/messaging/startNewConversation';

export default function useStartNewMessage(donatedBy: string, itemId: number) {
  const router = useRouter();
  const { dispatch } = useConversationContext();
  const supabase = newClient();

  return async function messageHandler(
    event: React.MouseEvent<HTMLButtonElement>
  ) {
    event.preventDefault();

    const {
      data: { session },
    } = await supabase.auth.getSession();

    if (session === null) {
      return router.push('/login?message="Please log in to use this feature."');
    }

    try {
      const newConversation = await startNewConversation(
        session.user.id,
        donatedBy,
        itemId
      );

      if (newConversation) {
        dispatch({
          type: 'SET_CURRENT_CONVERSATION',
          payload: newConversation,
        });
        dispatch({
          type: 'SET_SHOW_CONVERSATIONS_LIST',
          payload: false,
        });
      }

      router.push('/conversations');
    } catch (error) {
      console.error(error);
    }
  };
}
