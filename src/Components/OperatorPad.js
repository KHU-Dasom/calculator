import React from "react";
import Button from "./Button";

function OperatorPad() {
  return (
    <div className="calc__keyboard__operator">
      {["+", "-", "x", "÷"].map((i) => (
        <Button
          Onclick={() => console.log(i)}
          shape="button--deepblue"
          value={i}
        ></Button>
      ))}
      <Button
        Onclick={() => console.log("=")}
        shape="button--pink"
        value={"="}
      ></Button>
    </div>
  );
}

export default OperatorPad;
