import { createContext } from "react";

export const AppContext = createContext();

export const AppContextProvider = (props) => {
  const contextValue = {
    // Define any state or functions you want to provide to the context

  };

  return (
    <AppContext.Provider value={contextValue}>
      {props.children}
    </AppContext.Provider>
  );
}
