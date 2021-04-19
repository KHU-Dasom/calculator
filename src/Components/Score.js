import React from "react";

function Score({ first, second, operator }) {
  function abc() {
    if (operator === "") return <div className="calc__score">{first}</div>;
    else
      return (
        <div className="calc__score">
          <div style={{ width: "100%" }}>{first + " " + operator}</div>
          <div>{second}</div>
        </div>
      );
  }

  return abc();
}

export default Score;
