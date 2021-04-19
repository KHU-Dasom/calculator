import React from "react";
import Button from "./Button";
import NumberPad from "./NumberPad";
import OperatorPad from "./OperatorPad";

function KeyPad({ first, second, operator, setFirst, setSecond, setOperator }) {
  const number = operator === "" ? first : second;
  const set = operator === "" ? (i) => setFirst(i) : (i) => setSecond(i);

  function clear_all() {
    setFirst(0);
    setSecond(0);
    setOperator("");
  }

  return (
    <div className="calc__keyboard">
      <div className="calc__keyboard__main">
        <Button
          Onclick={() => clear_all()}
          shape="calc__keyboard__ac"
          value="AC"
        ></Button>
        <NumberPad number={number} set={set}></NumberPad>
      </div>
      <OperatorPad set={(i) => setOperator(i)}></OperatorPad>
    </div>
  );
}

export default KeyPad;
