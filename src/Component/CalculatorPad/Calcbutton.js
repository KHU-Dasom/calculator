import React from "react";

function Calcbutton({ value, color, onClick }) {
  return (
    <div onClick={() => onClick(value)} className={`button button--${color}`}>
      {value}
    </div>
  );
}

export default Calcbutton;
