import React from 'react';
import { useRouter } from 'next/navigation';
import { useConversationContext } from '@/context/conversationContext';
import newClient from '@/supabase/utils/newClient';
import startNewConversation from '@/supabase/models/messaging/startNewConversation';

/**
 *
 * @description this hook retrieves the current session from the frontend and curries the User Id in it's return function to be used by the ItemCard component
 * @param donatedBy expects the 'donated_by' value of the target Item
 * @param itemId expects the 'id' value of the target Item
 * @returns an async handler function to handle the onClick event of our ItemCard component
 * @example const buttonHandler = useStartNewMessage(thisItem.donated_by, thisItem.Number)
 */
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
