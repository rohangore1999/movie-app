import { createContext, useState, useReducer } from "react";

// Reducers
import { initialState, Reducers } from "../reducers/Reducers";

export const Context = createContext();

export const Provider = ({ children }) => {
  const [state, dispatch] = useReducer(Reducers, initialState);

  const [data, setData] = useState([]);

  return (
    <Context.Provider value={{ data, setData, state, dispatch }}>
      {children}
    </Context.Provider>
  );
};
