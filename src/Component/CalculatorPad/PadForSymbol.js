import React from "react";
import Calcbutton from "./Calcbutton";

function PadForSymbol({ symbolKey, equalKey }) {
  const blueButtonIdx = ["+", "-", "×", "÷"];
  const numberLine = blueButtonIdx.map((value, idx) => (
    <Calcbutton
      onClick={symbolKey}
      key={value}
      color="deepblue"
      value={value}
    />
  ));
  return (
    <div className="calc__keyboard__operator">
      {numberLine}
      <Calcbutton onClick={equalKey} color="pink" key="=" value="=" />
    </div>
  );
}

export default PadForSymbol;
