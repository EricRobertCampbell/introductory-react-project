import React from "react";

const Summary = (props) => {
  return (
    <div style={{ textAlign: "center" }}>
      <h1>Summary</h1>

      <p>
        Below is a summary of the information you entered. Please look it over
        carefully!
      </p>

      <div className="summaryResults">
        <p>{JSON.stringify(props.data)}</p>
      </div>
      <div style={{ textAlign: "center" }}>
        <button type="button" onClick={props.back}>
          Back
        </button>
      </div>
    </div>
  );
};

export default Summary;
