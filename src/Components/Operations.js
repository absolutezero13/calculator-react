import React from "react";
import "./CssFiles/Operations.modules.css";
export const Operations = (props) => {
  const operations = [" + ", " - ", " / ", " * ", "."];
  return (
    <div className="operations">
      {operations.map((e) => (
        <button value={e} onClick={props.clicked} key={Math.random()}>
          {e}
        </button>
      ))}
      {
        <button className="equal-operation" onClick={props.equals}>
          =
        </button>
      }
    </div>
  );
};
export default Operations;
