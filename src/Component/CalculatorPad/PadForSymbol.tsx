import React from "react";
import Calcbutton from "./Calcbutton";

interface IPadForSymbolProps {
  symbolKey(key: string): void;
  equalKey(key: string): void;
}

const PadForSymbol: React.FC<IPadForSymbolProps> = ({ symbolKey, equalKey }) => {
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
