'use client';
import newConvoStart from '@/utils/supabase/newConvoStart';
export interface NewConversationButtonProps {
  user_id: string;
  item_owner_id: string;
}
export default function NewConversationButton() {
  return <button onClick={() => newConvoStart()}>message </button>;
  // plan create new row in table return id use that id and userID to make user_conversation for that user
  // and use that Id and itemr owner Id to make entry in user_conversations for message receive
  // then create first message with user ID for sender hard code text for now
}
