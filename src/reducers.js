const defaultState = {
  current: 0,
  data: {
    company: "",
    species: "",
    variety: "",
    germination: "",
  },
};

const reducer = (state = defaultState, action) => {
  switch (action.type) {
    case "MODIFY_DATA":
      const newData = Object.assign({}, state.data, action.data);
      return {
        current: state.current,
        data: newData,
      };

    case "INCREMENT":
      return Object.assign({}, state, { current: state.current + 1 });
    case "DECREMENT":
      return Object.assign({}, state, { current: state.current - 1 });
    default:
      return state;
  }
};

export default reducer;
