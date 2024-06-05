import { ConversationActionType, IConversationState } from './contextTypes';

export default function conversationReducer(
  state: IConversationState,
  action: ConversationActionType
): IConversationState {
  switch (action.type) {
    case 'SET_ALL_CONVERSATIONS':
      return { ...state, allConversations: action.payload };
    case 'SET_CURRENT_CONVERSATION':
      return { ...state, currentConversation: action.payload };
    case 'SET_SHOW_CONVERSATIONS_LIST':
      return { ...state, showConversationsList: action.payload };
    case 'SET_CURRENT_USER_ID':
      return { ...state, currentUserId: action.payload };
    default:
      return state;
  }
}
