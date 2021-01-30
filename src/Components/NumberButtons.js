import React from "react";
import "./CssFiles/NumberButtons.modules.css";

export const NumberButtons = (props) => {
  const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
  return (
    <div className="numbers">
      {numbers.map((e, i) => (
        <button className="number" onClick={props.clicked} value={e} key={i}>
          {e}
        </button>
      ))}
    </div>
  );
};

export default NumberButtons;
