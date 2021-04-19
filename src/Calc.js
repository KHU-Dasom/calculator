import React from "react";
import KeyPad from "./Components/KeyPad";

function Calc({ setHistories }) {
  return (
    <div className="calc">
      <div className="calc__title">Calculator</div>
      <div className="calc__score">0</div>
      <KeyPad></KeyPad>
    </div>
  );
}

export default Calc;
