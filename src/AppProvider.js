import reducer from "../src/Reducer";
import { createContext, useReducer } from "react";

const AppContext = createContext();
const initialState = {
  formshow: false,
};
export const AppContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  // show form function
  const showFrom = () => {
    dispatch({ type: "FORMTOGGLE" });
  };
  return (
    <AppContext.Provider value={{ ...state, showFrom }}>
      {children}
    </AppContext.Provider>
  );
};

export default AppContext;
