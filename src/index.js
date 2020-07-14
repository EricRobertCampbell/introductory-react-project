import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import { Provider, connect } from "react-redux";
import { createStore } from "redux";
import reducer from "./reducers.js";

const store = createStore(reducer);

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

const mapStateToProps = (state) => ({
  data: state.data,
  current: state.current,
});

const mapDispatchToProps = (dispatch) => ({
  increment: () => dispatch(dispatchIncrement()),
  decrement: () => dispatch(dispatchDecrement()),
  handleData: (values) => dispatch(dispatchDataChange(values)),
});

const ConnectedApp = connect(mapStateToProps, mapDispatchToProps)(App);

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <ConnectedApp />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
