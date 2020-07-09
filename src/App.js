import React, { useState } from "react";
import "./App.css";

//Get custom components
import { BasicForm, ValidatedForm } from "./components/Forms.jsx";
import Nav from "./components/Nav.jsx";
import Intro from "./components/Intro.jsx";
import Summary from "./components/Summary.jsx";

const App = () => {
  /* State variables */
  const [data, changeData] = useState([]); //current format for data: an array corresponding to the form number, and then the values in that (corresponds to formState.values)
  const [current, changeCurrent] = useState(0);

  /**
   * Used to increment and decrement the current page
   */
  function increment() {
    changeCurrent(current + 1);
  }
  function decrement() {
    changeCurrent(current - 1);
  }

  /**
   * Used to handle when things are input into forms
   */
  function handleChange(formState) {
    const { values } = formState;
    const copy = data.map((elem) => ({ ...elem }));
    copy[current] = { ...values };
    changeData(copy);
  }

  function handleSubmit(formState) {
    increment();
  }

  const validateGermination = (value) => {
    let errorString;
    if (Number.isNaN(Number(value)) === true) {
      errorString = "Your entry must be a valid number.";
    } else if (value.includes(".")) {
      errorString = "Your number cannot be a decimal (include a '.').";
    } else if (value.includes("-")) {
      errorString = "Your number cannot be negative (include a '-').";
    } else if (value === "0") {
      errorString = "Your number must be greater than zero.";
    }

    return errorString;
  };

  const pages = [
    <Intro next={increment} />,
    <BasicForm
      key="company"
      onChange={(formState) => handleChange(formState)}
      onSubmit={(formState) => handleSubmit(formState)}
      title="Company"
      question="Which company did you purchase the seeds from?"
      field="company"
      initialValues={data[current]}
      next={increment}
      last={decrement}
    />,
    <BasicForm
      key="species"
      onChange={(formState) => handleChange(formState)}
      onSubmit={(formState) => handleSubmit(formState)}
      title="Species"
      question="Which species of seed did you buy?"
      field="species"
      initialValues={data[current]}
      next={increment}
      last={decrement}
    />,
    <BasicForm
      key="variety"
      onChange={(formState) => handleChange(formState)}
      onSubmit={(formState) => handleSubmit(formState)}
      title="Variety"
      question={`Which variety of did you buy?`}
      field="variety"
      initialValues={data[current]}
      next={increment}
      last={decrement}
    />,
    <ValidatedForm
      key="germination"
      onChange={(formState) => handleChange(formState)}
      onSubmit={(formState) => handleSubmit(formState)}
      title="Germination"
      question="How long from the initial planting to germination?"
      field="germination"
      initialValues={data[current]}
      validate={validateGermination}
      next={increment}
      last={decrement}
    />,
    <Summary key="summary" data={data} back={decrement} />,
  ];
  return (
    <>
      {/* Render the current child of App */}
      {pages[current]}

      <Nav current={current} numPages={pages.length} />
    </>
  );
};

export default App;
