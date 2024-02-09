export type MessageType = {
  id: number;
  is_read: boolean;
  sender_id: string;
  created_at: string;
  message_text: string;
  conversation_id: number;
};

export type AllConversationsType = ConversationCardType[];

export type ConversationCardType = {
  id?: number;
  joined_at?: string;
  conversation_id: number;
  user_id: string;
  conversations: {
    id: number;
    messages: MessageType[];
    created_at: string;
  };
};
