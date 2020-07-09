import React from "react";

const Intro = (props) => (
  <>
    <div stye={{ textAlign: "center" }}>
      <h1>Introduction</h1>

      <p style={{ textAlign: "center" }}>
        Use the form to enter your responses. They will be saved automatically,
        but will be lost if you navigate away from the page entirely.
      </p>
      <div style={{ textAlign: "center" }}>
        <button type="button" onClick={props.next}>
          Begin!
        </button>
      </div>
    </div>
  </>
);

export default Intro;
