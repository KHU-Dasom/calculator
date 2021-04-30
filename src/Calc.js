import React from "react";
import { useState } from "react";
import KeyPad from "./Components/KeyPad";
import Score from "./Components/Score";

function Calc({ setHistories }) {
  const [first, setFirst] = useState(0);
  const [second, setSecond] = useState(0);
  const [operator, setOperator] = useState("");

  return (
    <div className="calc">
      <div className="calc__title">Calculator</div>
      <Score first={first} second={second} operator={operator}></Score>
      <KeyPad
        first={first}
        second={second}
        operator={operator}
        setFirst={(i) => setFirst(i)}
        setSecond={(i) => setSecond(i)}
        setOperator={(i) => setOperator(i)}
        setHistories={(i) => setHistories(i)}
      ></KeyPad>
    </div>
  );
}

export default Calc;
