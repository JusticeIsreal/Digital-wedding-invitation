const reducer = (state, action) => {
  if (action.type === "FORMTOGGLE") {
    return {
      ...state,
      formshow: !state.formshow,
    };
  }
  return state;
};
export default reducer;
