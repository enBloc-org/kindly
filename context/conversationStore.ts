import {
  ConversationActionType,
  ConversationStateType,
} from '../types/contextTypes';

export default function conversationReducer(
  state: ConversationStateType,
  action: ConversationActionType
): ConversationStateType {
  switch (action.type) {
    case 'SET_ALL_CONVERSATIONS':
      return { ...state, allConversations: action.payload };

    case 'SET_CURRENT_CONVERSATION':
      return { ...state, currentConversation: action.payload };

    case 'SET_SHOW_CONVERSATIONS_LIST':
      return { ...state, showConversationsList: action.payload };

    case 'SET_CURRENT_USER_ID':
      return { ...state, currentUserId: action.payload };

    case 'ADD_NEW_CONVERSATION':
      return {
        ...state,
        allConversations: [action.payload, ...state.allConversations],
      };

    case 'DELETE_CONVERSATION':
      return {
        ...state,
        allConversations: state.allConversations.filter(
          (conversation) => conversation.id !== action.payload
        ),
      };

    default:
      return state;
  }
}
