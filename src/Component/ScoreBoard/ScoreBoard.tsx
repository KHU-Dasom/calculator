import React, {Dispatch, useEffect} from "react";

interface IScoreBoard {
  Num1: string;
  Num2: string;
  Symbol: string;
  setBoard: Dispatch<React.SetStateAction<string>>
  Board: string;
}

const ScoreBoard: React.FC<IScoreBoard> = ({ Num1, Num2, Symbol, setBoard, Board }) => {
  useEffect(() => {
    setBoard(`${Num1} ${Symbol} ${Num2}`);
  }, [Num1, Symbol, Num2, setBoard]);

  return <div className="calc__score">{Board}</div>;
}
export default ScoreBoard;
