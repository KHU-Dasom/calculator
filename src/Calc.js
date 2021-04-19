import React from "react";
import NumberPad from "./Components/NumberPad";
import OperatorPad from "./Components/OperatorPad";

function Calc({ setHistories }) {
  return (
    <div className="calc">
      <div className="calc__title">Calculator</div>
      <div className="calc__score">0</div>
      <div className="calc__keyboard">
        <div className="calc__keyboard__main">
          <div className="button calc__keyboard__ac">AC</div>
          <NumberPad></NumberPad>
        </div>
        <OperatorPad></OperatorPad>
      </div>
    </div>
  );
}

export default Calc;
