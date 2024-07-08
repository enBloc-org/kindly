import {
  AllConversationsType,
  ConversationCardType,
} from '@/types/messagingTypes';

export interface ConversationStateType {
  allConversations: AllConversationsType;
  currentConversation: ConversationCardType | undefined;
  showConversationsList: boolean;
  currentUserId: string;
  conversationId: number;
}

export type ConversationActionType =
  | { type: 'SET_ALL_CONVERSATIONS'; payload: AllConversationsType }
  | { type: 'SET_CURRENT_CONVERSATION'; payload: ConversationCardType }
  | { type: 'SET_SHOW_CONVERSATIONS_LIST'; payload: boolean }
  | { type: 'SET_CURRENT_USER_ID'; payload: string }
  | { type: 'SET_CURRENT_CONVERSATION_ID'; payload: number }
  | { type: 'ADD_NEW_CONVERSATION'; payload: ConversationCardType }
  | { type: 'DELETE_CONVERSATION'; payload: number };
