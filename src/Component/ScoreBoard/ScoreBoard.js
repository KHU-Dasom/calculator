import React, { useEffect } from "react";

function ScoreBoard({ Num1, Num2, Symbol, setBoard, Board }) {
  useEffect(() => {
    setBoard(`${Num1} ${Symbol} ${Num2}`);
  }, [Num1, Symbol, Num2, setBoard]);

  return <div className="calc__score">{Board}</div>;
}
export default ScoreBoard;
