const reducer = (state, action) => {
  if (action.type === "FORMTOGGLE") {
    return {
      ...state,
      formshow: !state.formshow,
      togglebtn: !state.togglebtn,
    };
  }
  if (action.type === "POST") {
    console.log("object");
  }
  return state;
};
export default reducer;
