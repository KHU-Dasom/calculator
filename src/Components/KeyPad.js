import React from "react";
import Button from "./Button";
import NumberPad from "./NumberPad";
import NumberPadContainer from "../Container/NumberPadContainer";
import OperatorPad from "./OperatorPad";

function KeyPad({
  first,
  second,
  operator,
  setFirst,
  setSecond,
  setOperator,
  setHistories,
}) {
  const number = operator === "" ? first : second;
  const set = operator === "" ? (i) => setFirst(i) : (i) => setSecond(i);

  function clear_all() {
    setFirst(0);
    setSecond(0);
    setOperator("");
  }

  function change_oper(oper) {
    if (operator === "") setOperator(oper);
    else {
      let result;
      switch (operator) {
        case "+":
          result = first + second;
          break;
        case "-":
          result = first - second;
          break;
        case "x":
          result = first * second;
          break;
        case "÷":
          result = first / second;
          break;
        case "=":
          result = second;
          break;
        default:
          console.log("Error!");
      }
      if (operator !== "=") {
        setHistories((prevHistory) => [
          ...prevHistory,
          first + " " + operator + " " + second + " = " + result,
        ]);
      }
      setFirst(result);
      setSecond(0);
      if (oper === "=") setOperator("");
      else setOperator(oper);
    }
  }

  return (
    <div className="calc__keyboard">
      <div className="calc__keyboard__main">
        <Button
          Onclick={() => clear_all()}
          shape="calc__keyboard__ac"
          value="AC"
        ></Button>
        <NumberPadContainer />
      </div>
      <OperatorPad set={(i) => change_oper(i)}></OperatorPad>
    </div>
  );
}

export default KeyPad;
