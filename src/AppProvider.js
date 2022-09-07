import reducer from "../src/Reducer";
import { createContext, useReducer } from "react";

const AppContext = createContext();
const initialState = {
  formshow: false,
  togglebtn: true,
  name: "",
  Pnumber: "",
  attend: "",
  spouse: " ",
};
export const AppContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  // show form function
  const showFrom = () => {
    dispatch({ type: "FORMTOGGLE" });
  };

  // submit form function
  const submitForm = (e) => {
    dispatch({ type: "POST", payload: e });
  };

  const final = () => {
    dispatch({ type: "SUBMIT" });
  };
  return (
    <AppContext.Provider value={{ ...state, showFrom, submitForm, final }}>
      {children}
    </AppContext.Provider>
  );
};

export default AppContext;
