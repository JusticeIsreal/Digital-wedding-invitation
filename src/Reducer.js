const reducer = (state, action) => {
  if (action.type === "FORMTOGGLE") {
    return {
      ...state,
      // formshow: true,
      // togglebtn: true,
      formshow: !state.formshow,
      togglebtn: !state.togglebtn,
    };
  }
  if (action.type === "POST") {
    // console.log(action.payload);
    return {
      ...state,
      name: action.payload.target.value,
    };
  }
  if (action.type === "SUBMIT") {
    if (state.name.length < 5) {
      console.log("hgjh");
      // return false;
    }
  }
  return state;
};
export default reducer;
