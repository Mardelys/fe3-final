import { createContext, useReducer, useMemo } from "react";
import PropTypes from "prop-types";
export const initialState = { theme: "light", data: [] };

export const ContextGlobal = createContext(undefined);

const reducer = (state, action) => {
  switch (action.type) {
    case "SET_THEME":
      return { ...state, theme: state.theme === "light" ? "dark" : "light" };
    case "SET_DATA":
      return { ...state, data: action.payload };
    default:
      return state;
  }
};

 const ContextProvider = ({ children }) => {
  // Add prop validation for 'children'
  
  const [state, dispatch] = useReducer(reducer, initialState);

  const value = useMemo(() => ({ state, dispatch }), [state, dispatch]);

  return (
    <ContextGlobal.Provider value={value}>
      {children}
    </ContextGlobal.Provider>
  );
};
export default ContextProvider;

ContextProvider.propTypes = {
  children: PropTypes.node.isRequired,
};