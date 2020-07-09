import React from "react";
import { Form, Text, BasicText, asField } from "informed";

const BasicForm = (props) => {
  //   console.log("props: ", props);
  const {
    onChange,
    onSubmit,
    field,
    initialValues,
    title,
    question,
    last,
  } = props;
  return (
    <>
      <h1>{title}</h1>
      <Form
        onChange={onChange}
        onSubmit={onSubmit}
        preventEnter={false}
        allowEmptyStrings={true}
        initialValues={initialValues}
      >
        <label>
          {question}
          <Text field={field} required={true} />
        </label>
        <br />
        <p>{/*This is here only for congruence with ValidatedForm */}</p>
        <p></p>
        <div style={{ textAlign: "center" }}>
          <button type="button" onClick={last}>
            Go Back
          </button>
          <button type="submit">Submit and Continue</button>
        </div>
      </Form>
    </>
  );
};

const ShowError = ({ fieldState, ...props }) => {
  return (
    <>
      <BasicText fieldState={fieldState} {...props} />
      <br />
      {fieldState.error ? (
        <p style={{ color: "red", border: "1px solid red" }}>
          {fieldState.error}
        </p>
      ) : (
        <p></p>
      )}
    </>
  );
};

const ShowErrorField = asField(ShowError);

const ValidatedForm = (props) => {
  const {
    onChange,
    onSubmit,
    field,
    initialValues,
    title,
    question,
    validate,
    last,
  } = props;
  return (
    <>
      <h1>{title}</h1>
      <Form
        onChange={onChange}
        onSubmit={onSubmit}
        allowEmptyStrings={true}
        initialValues={initialValues}
      >
        <label>
          {question}
          <ShowErrorField
            field={field}
            initialValues={initialValues}
            validate={validate}
            validateOnChange={true}
            required={true}
          />
        </label>
        <div style={{ textAlign: "center" }}>
          <button type="button" onClick={last}>
            Go Back
          </button>
          <button type="submit">Submit and Continue</button>
        </div>
      </Form>
    </>
  );
};

export { BasicForm, ValidatedForm };
