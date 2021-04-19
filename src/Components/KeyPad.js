import React from "react";
import Button from "./Button";
import NumberPad from "./NumberPad";
import OperatorPad from "./OperatorPad";

function KeyPad() {
  return (
    <div className="calc__keyboard">
      <div className="calc__keyboard__main">
        <Button
          Onclick={() => console.log("AC")}
          shape="calc__keyboard__ac"
          value="AC"
        ></Button>
        <NumberPad></NumberPad>
      </div>
      <OperatorPad></OperatorPad>
    </div>
  );
}

export default KeyPad;
