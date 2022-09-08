import reducer from "../src/Reducer";
import users from "../src/Api";
import { createContext, useReducer } from "react";

const AppContext = createContext();
const initialState = {
  formshow: false,
  togglebtn: true,
  name: "",
  phonenumber: "",
  attend: "",
  gender: "",
  spouse: " ",
  submitBtn: false,
  nameError: "",
  phonenumberError: "",
  attendError: "",
  genderError: "",
  nameErrorColor: false,
  phoneErrorColor: false,
  genderErrorColor: false,
  attendErrorColor: false,
  people: users,
};
export const AppContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  // console.log(state.people);

  // show form function
  const showFrom = () => {
    dispatch({ type: "FORMTOGGLE" });
  };

  // name input
  const nameInput = (e) => {
    dispatch({ type: "NAME", payload: e });
  };
  // PHONE INPUT
  const phoneNumberInput = (e) => {
    dispatch({ type: "PHONENUMBER", payload: e });
  };
  // gender input
  const genderInput = (e) => {
    dispatch({ type: "GENDER", payload: e });
  };

  // attendInput
  const attendInput = (e) => {
    dispatch({ type: "ATTEND", payload: e });
  };
  // spouseInput
  const spouseInput = (e) => {
    dispatch({ type: "SPOUSE", payload: e });
  };

  // form validation errors
  const btn = () => {
    dispatch({ type: "ERRORNAME" });
    dispatch({ type: "ERRORPHONE" });
    dispatch({ type: "ERRORGENDER" });
    dispatch({ type: "ERRORATTEND" });
  };
 
  return (
    <AppContext.Provider
      value={{
        ...state,
        showFrom,
        btn,
        nameInput,
        phoneNumberInput,
        genderInput,
        attendInput,
        spouseInput,
        
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export default AppContext;
