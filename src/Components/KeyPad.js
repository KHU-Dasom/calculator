import React from "react";
import NumberPadContainer from "../Container/NumberPadContainer";
import OperatorPadContainer from "../Container/OperatorContainer";
import ClearContainer from "../Container/ClearContainer";

function KeyPad() {
  return (
    <div className="calc__keyboard">
      <div className="calc__keyboard__main">
        <ClearContainer />
        <NumberPadContainer />
      </div>
      <OperatorPadContainer />
    </div>
  );
}

export default KeyPad;
