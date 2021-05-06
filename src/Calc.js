import React from "react";
import KeyPad from "./Components/KeyPad";
import ScoreContainer from "./Container/ScoreContainer";

function Calc() {
  return (
    <div className="calc">
      <div className="calc__title">Calculator</div>
      <ScoreContainer />
      <KeyPad />
    </div>
  );
}

export default Calc;
