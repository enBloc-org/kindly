import {
  AllConversationsType,
  ConversationCardType,
} from '@/types/messagingTypes';

export interface IConversationState {
  allConversations: AllConversationsType;
  currentConversation: ConversationCardType | undefined;
  showConversationsList: boolean;
  currentUserId: string;
}

export type ConversationActionType =
  | { type: 'SET_ALL_CONVERSATIONS'; payload: AllConversationsType }
  | { type: 'SET_CURRENT_CONVERSATION'; payload: ConversationCardType }
  | { type: 'SET_SHOW_CONVERSATIONS_LIST'; payload: boolean }
  | { type: 'SET_CURRENT_USER_ID'; payload: string }
  | { type: 'ADD_NEW_CONVERSATION'; payload: ConversationCardType };
