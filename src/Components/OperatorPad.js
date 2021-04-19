import React from "react";
import Button from "./Button";

function OperatorPad({ set }) {
  return (
    <div className="calc__keyboard__operator">
      {["+", "-", "x", "÷"].map((i) => (
        <Button
          Onclick={() => set(i)}
          shape="button--deepblue"
          value={i}
        ></Button>
      ))}
      <Button
        Onclick={() => set("=")}
        shape="button--pink"
        value={"="}
      ></Button>
    </div>
  );
}

export default OperatorPad;
