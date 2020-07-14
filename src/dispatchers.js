const dispatchDataChange = (values) => ({
  type: "MODIFY_DATA",
  data: values,
});

const dispatchIncrement = () => ({
  type: "INCREMENT",
});

const dispatchDecrement = () => ({
  type: "DECREMENT",
});

export default { dispatchDataChange, dispatchIncrement, dispatchDecrement };
