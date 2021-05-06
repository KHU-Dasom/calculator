import React from "react";
import Button from "./Button";

function OperatorPad({ onSetOperator }) {
  return (
    <div className="calc__keyboard__operator">
      {["+", "-", "x", "÷"].map((i) => (
        <Button
          Onclick={() => onSetOperator(i)}
          shape="button--deepblue"
          value={i}
        ></Button>
      ))}
      <Button
        Onclick={() => onSetOperator("=")}
        shape="button--pink"
        value={"="}
      ></Button>
    </div>
  );
}

export default OperatorPad;
