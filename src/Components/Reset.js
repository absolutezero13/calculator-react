import React from "react";
import "./CssFiles/Operations.modules.css";
export const Reset = (props) => {
  return (
    <div>
      <button className="reset-button" onClick={props.clicked}>
        Reset
      </button>
    </div>
  );
};
export default Reset;
