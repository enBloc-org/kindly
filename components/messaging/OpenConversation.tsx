'use client';

import { message } from '@/utils/supabase/types';
// import MessageCard from './MessageCard';

export type OpenConversationProps = {
  id?: number;
  joined_at?: string;
  conversation_id: string;
  conversations: {
    id: number;
    messages: message[];
    created_at: string;
  };
};

const OpenConversation: React.FC<OpenConversationProps> = ({
  conversation_id,
  conversations,
}) => {
  return (
    <div>
      <p>{conversation_id}</p>
      <p>{conversations.messages[0]?.message_text || 'no messages'}</p>
    </div>
  );
};

export default OpenConversation;
