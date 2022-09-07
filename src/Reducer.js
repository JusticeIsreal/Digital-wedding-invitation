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
  if (action.type === "BTN") {
    console.log("object");
    return {
      ...state,
      submitBtn: true,
    };
  }
  return state;
};
export default reducer;
