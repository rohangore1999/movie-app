import { createContext, useReducer } from "react";

// Reducers
import { initialState, Reducers } from "../reducers/Reducers";

export const Context = createContext();

export const Provider = ({ children }) => {
  const [state, dispatch] = useReducer(Reducers, initialState);

  return (
    <Context.Provider value={{ state, dispatch }}>{children}</Context.Provider>
  );
};
