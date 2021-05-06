import React from "react";

interface ICalcbuttonProps {
  // value(key: string | number): void;
  value: any;
  color: string;
  onClick: any;
}

const Calcbutton:React.FC<ICalcbuttonProps> = ({ value, color, onClick }) =>{
  return (
    <div onClick={() => onClick(value)} className={`button button--${color}`}>
      {value}
    </div>
  );
}

export default Calcbutton;
