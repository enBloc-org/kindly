import React, { createContext, useContext, useReducer, ReactNode } from 'react';

type LayoutState = {
  showConversationList: boolean;
};

type LayoutAction = { type: 'set_show_conversation_list'; value: boolean };

const initialState: LayoutState = {
  showConversationList: true,
};

function layoutReducer(state: LayoutState, action: LayoutAction): LayoutState {
  switch (action.type) {
    case 'set_show_conversation_list':
      return { ...state, showConversationList: action.value };
    default:
      throw new Error(`Unhandled action type`);
  }
}

type LayoutContextType = {
  state: LayoutState;
  dispatch: React.Dispatch<LayoutAction>;
};

const LayoutContext = createContext<LayoutContextType | null>(null);

export const LayoutProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [state, dispatch] = useReducer(layoutReducer, initialState);

  const value = { state, dispatch };

  return (
    <LayoutContext.Provider value={value}>{children}</LayoutContext.Provider>
  );
};

// Custom hook to use the context
export const useLayout = (): LayoutContextType => {
  const context = useContext(LayoutContext);
  if (!context) {
    throw new Error('useLayout must be used within a LayoutProvider');
  }
  return context;
};
