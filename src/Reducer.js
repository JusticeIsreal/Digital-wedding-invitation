const reducer = (state, action) => {
  if (action.type === "FORMTOGGLE") {
    return {
      ...state,
      formshow: !state.formshow,
      togglebtn: !state.togglebtn,
    };
  }
  if (action.type === "NAME") {
    return {
      ...state,
      name: action.payload.target.value,
    };
  }
  if (action.type === "PHONENUMBER") {
    return {
      ...state,
      phonenumber: action.payload.target.value,
    };
  }
  if (action.type === "GENDER") {
    return {
      ...state,
      gender: action.payload.target.value,
    };
  }
  if (action.type === "ATTEND") {
    return {
      ...state,
      attend: action.payload.target.value,
    };
  }
  if (action.type === "SPOUSE") {
    return {
      ...state,
      spouse: action.payload.target.value,
    };
  }

  // ERROR HANDLER
  if (action.type === "ERRORNAME") {
    if (state.name.length < 7) {
      return {
        ...state,
        submitBtn: false,
        nameErrorColor: false,
        nameError: "Enter full Name",
      };
    } else {
      return {
        ...state,
        submitBtn: true,
        nameErrorColor: true,
        nameError: "Good",
      };
    }
  }
  if (action.type === "ERRORPHONE") {
    var phoneno = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
    if (state.phonenumber.match(phoneno) || state.phonenumber.length > 9) {
      return {
        ...state,
        submitBtn: true,
        phoneErrorColor: true,
        phonenumberError: "Good",
      };
    } else {
      return {
        ...state,
        submitBtn: false,
        phoneErrorColor: false,
        phonenumberError: "Enter a valide Phone number",
      };
    }
  }
  if (action.type === "ERRORGENDER") {
    if (state.gender === "") {
      return {
        ...state,
        submitBtn: false,
        genderErrorColor: false,
        genderError: "Select an option",
      };
    } else {
      return {
        ...state,
        submitBtn: true,
        genderErrorColor: true,
        genderError: "Good",
      };
    }
  }
  if (action.type === "ERRORATTEND") {
    if (state.attend === "") {
      return {
        ...state,
        submitBtn: false,
        attendErrorColor: false,
        attendError: "Select an option",
      };
    } else {
      return {
        ...state,
        submitBtn: true,
        attendErrorColor: true,
        attendError: "Good",
      };
    }
  }
  return state;
};
export default reducer;
