import React, { useState } from "react";
import PadForNumber from "./CalculatorPad/PadForNumber";
import PadForSymbol from "./CalculatorPad/PadForSymbol";
import ScoreBoard from "./ScoreBoard/ScoreBoard";

function Calc({ setHistories }) {
  const [Num1, setNum1] = useState("");
  const [Num2, setNum2] = useState("");
  const [Symbol, setSymbol] = useState("");
  const [Board, setBoard] = useState("");

  function numberkey(key) {
    // debugger;
    if (key < 0 || key > 10) {
      alert("Wrong Method!");
      return;
    }
    Symbol.length === 0 ? setNum1(Num1 + key) : setNum2(Num2 + key);
  }

  function symbolKey(key) {
    const availableSymbol = ["+", "-", "×", "÷"];
    if (availableSymbol.find((val) => val === key) === undefined) {
      alert("Wrong Method!");
      return;
    }
    if (Symbol.length === 0) setSymbol(key);
    else {
      equalKey("=");
      setSymbol(key);
    }
  }

  function equalKey(key) {
    if (key !== "=") {
      alert("Wrong Method!");
    } else if (Num1 === "") {
    } else if (Num2 === "") {
      setSymbol("");
    } else {
      const tempNum1 = parseFloat(Num1);
      const tempNum2 = parseFloat(Num2);
      let result = 0.0;
      switch (Symbol) {
        case "+":
          result = tempNum1 + tempNum2;
          break;
        case "-":
          result = tempNum1 - tempNum2;
          break;
        case "×":
          result = tempNum1 * tempNum2;
          break;
        case "÷":
          result = tempNum1 / tempNum2;
          if (tempNum2 === 0) {
            setNum1("");
            setNum2("");
            setSymbol("");
            setBoard("");
            alert("0으로 나눌 수 없습니다!");
            return;
          }
          break;
        default:
          result = tempNum1;
      }
      setNum1(result.toString());
      setNum2("");
      setSymbol("");
    }
  }

  return (
    <div className="calc">
      <div className="calc__title">Calculator</div>
      <ScoreBoard
        Num1={Num1}
        Num2={Num2}
        Symbol={Symbol}
        Board={Board}
        setBoard={setBoard}
      />
      <div className="calc__keyboard">
        <div className="calc__keyboard__main">
          <ACButton
            setNum1={setNum1}
            setNum2={setNum2}
            setSymbol={setSymbol}
            setBoard={setBoard}
          />
          <PadForNumber numberkey={numberkey} />
        </div>
        <PadForSymbol symbolKey={symbolKey} equalKey={equalKey} />
      </div>
    </div>
  );
}

function ACButton({ setNum1, setNum2, setSymbol, setBoard }) {
  function Clear() {
    setNum1("");
    setNum2("");
    setSymbol("");
    setBoard("");
  }
  return (
    <div onClick={() => Clear()} className="button calc__keyboard__ac">
      AC
    </div>
  );
}

export default Calc;
