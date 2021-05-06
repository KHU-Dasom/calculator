import React, {Dispatch, SetStateAction, useState} from "react";
import PadForNumber from "./CalculatorPad/PadForNumber";
import PadForSymbol from "./CalculatorPad/PadForSymbol";
import ScoreBoard from "./ScoreBoard/ScoreBoard";

//TODO 여기부터 고치기

interface ICalcProps {
  setHistories: React.Dispatch<React.SetStateAction<string[]>>;
  histories: string[];
}

const Calc: React.FC<ICalcProps> = ({ setHistories, histories }) => {
  const [Num1, setNum1] = useState("" as string);
  const [Num2, setNum2] = useState("" as string);
  const [Symbol, setSymbol] = useState("" as string);
  const [Board, setBoard] = useState("" as string);

  function numberkey(key: number) {
    if (key < 0 || key > 10) {
      alert("Wrong Method!");
      return;
    }
    Symbol.length === 0 ? setNum1(Num1 + key) : setNum2(Num2 + key);
  }

  function symbolKey(key : string) {
    const availableSymbol = ["+", "-", "×", "÷"];
    if (availableSymbol.find((val) => val === key) === undefined) {
      alert("Wrong Method!");
      return;
    }
    if (Num1.length === 0) return;
    if (Symbol.length === 0) setSymbol(key);
    else {
      equalKey("=");
      setSymbol(key);
    }
  }

  function equalKey(key: string) {
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
      setHistories([...histories, `${Board} = ${result}`]);
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

interface IACButton {
  setNum1: Dispatch<SetStateAction<string>>;
  setNum2: Dispatch<SetStateAction<string>>;
  setSymbol: Dispatch<SetStateAction<string>>;
  setBoard: Dispatch<SetStateAction<string>>;

}


const ACButton: React.FC<IACButton> = ({ setNum1, setNum2, setSymbol, setBoard }) => {
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
