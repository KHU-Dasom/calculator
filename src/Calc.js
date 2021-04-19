import React from "react";
import NumberPad from "./Components/NumberPad";

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
        <div className="calc__keyboard__operator">
          <div className="button button--deepblue">+</div>
          <div className="button button--deepblue">-</div>
          <div className="button button--deepblue">×</div>
          <div className="button button--deepblue">÷</div>
          <div className="button button--pink">=</div>
        </div>
      </div>
    </div>
  );
}

export default Calc;
