import React from "react";
import { useContext, useState, createContext, SetStateAction } from "react";

const StateContext = createContext(
  {} as {
    toggle: boolean;
    setToggle: React.Dispatch<SetStateAction<boolean>>;
  }
);

export const StateProvider: React.FC = ({ children }) => {
  const [toggle, setToggle] = useState(false);
  return (
    <StateContext.Provider value={{ toggle, setToggle }}>
      {children}
    </StateContext.Provider>
  );
};

export const useStateContext = () => useContext(StateContext);
