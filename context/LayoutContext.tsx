import React, { createContext, useContext, useReducer, ReactNode } from 'react';

type LayoutState = {
  headerHeight: number;
  footerHeight: number;
};

type LayoutAction =
  | { type: 'SET_HEADER_HEIGHT'; height: number }
  | { type: 'SET_FOOTER_HEIGHT'; height: number };

const initialState: LayoutState = {
  headerHeight: 0,
  footerHeight: 0,
};

function layoutReducer(state: LayoutState, action: LayoutAction): LayoutState {
  switch (action.type) {
    case 'SET_HEADER_HEIGHT':
      return { ...state, headerHeight: action.height };
    case 'SET_FOOTER_HEIGHT':
      return { ...state, footerHeight: action.height };
    default:
      throw new Error(`Unhandled action type`);
  }
}

// Type for context value
interface LayoutContextType {
  state: LayoutState;
  dispatch: React.Dispatch<LayoutAction>;
}

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
export const useLayout = () => {
  const context = useContext(LayoutContext);
  if (!context) {
    throw new Error('useLayout must be used within a LayoutProvider');
  }
  return context;
};
