import React from "react";
import { connect } from "react-redux";

const BaseSummary = (props) => {
  const { company, species, variety, germination } = props.data;
  return (
    <div style={{ textAlign: "center" }}>
      <h1>Summary</h1>

      <p>
        Below is a summary of the information you entered. Please look it over
        carefully!
      </p>

      <div className="summaryResults">
        <p>Company: {company}</p>
        <p>Species: {species}</p>
        <p>Variety: {variety}</p>
        <p>Days to Germination: {germination}</p>
      </div>
      <div style={{ textAlign: "center" }}>
        <button type="button" onClick={props.back}>
          Back
        </button>
      </div>
    </div>
  );
};

const Summary = connect(
  (state) => ({
    data: state.data,
  }),
  null
)(BaseSummary);

export default Summary;
