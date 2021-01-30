import React from "react";
import "./CssFiles/InputField.modules.css";
export const InputField = (props) => {
  return (
    <div className="inputDiv">
      <input placeholder="0" className="input" value={props.value} readOnly />
    </div>
  );
};

export default InputField;
