import React from "react";
import { useState } from "react";
import KeyPad from "./Components/KeyPad";

function Calc({ histories, setHistories }) {
  const [first, setFirst] = useState(0);
  const [second, setSecond] = useState(0);
  const [operator, setOperator] = useState("");

  return (
    <div className="calc">
      <div className="calc__title">Calculator</div>
      <div className="calc__score">{first + operator + second}</div>
      <KeyPad
        first={first}
        second={second}
        operator={operator}
        setFirst={(i) => setFirst(i)}
        setSecond={(i) => setSecond(i)}
        setOperator={(i) => setOperator(i)}
        histories={histories}
        setHistories={(i) => setHistories(i)}
      ></KeyPad>
    </div>
  );
}

export default Calc;
